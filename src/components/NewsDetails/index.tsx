import { useQueryClient } from "@tanstack/react-query";
import { SyntheticEvent } from "react";
import { useParams } from "react-router-dom";

import { useAddNewsComment } from "../../core/services/api/news/comments/useAddNewsComment";
import { useNewsComments } from "../../core/services/api/news/comments/useNewsComments";
import { useNewsById } from "../../core/services/api/news/useNewsById";
import { useNewsRate } from "../../core/services/api/news/useNewsRate";
import { loadDescribe } from "../../core/utils/load-describe.utils";
import { showErrorToast } from "../../core/utils/toast.utils";
import { commentFormSchema } from "../../core/validations/comment-form.validation";

import { BlockInterface } from "../../types/block";

import { CommentForm } from "../common/CommentForm";
import { Comments } from "../common/Comments";
import { Satisfaction } from "../common/Satisfaction";
import { Skeleton } from "../common/Skeleton";
import { NewsHeroSection } from "./NewsHeroSection";
import { ShareBox } from "./ShareBox";

const NewsDetails = () => {
  const { newsId } = useParams();

  const queryClient = useQueryClient();
  const { data, isLoading, error } = useNewsById(newsId);
  const { data: comments } = useNewsComments(newsId!);
  const addNewsRate = useNewsRate();
  const addNewsComment = useAddNewsComment();

  if (error) showErrorToast("مشکلی در دریافت خبر به وجود آمد !");

  let convertedDescribe: string | { blocks: BlockInterface[] };

  try {
    const convertDescribe = JSON.parse(data?.detailsNewsDto.describe!);

    convertedDescribe = convertDescribe;
  } catch (error) {
    convertedDescribe = data?.detailsNewsDto.describe!;
  }

  const handleRateChange = async (
    e: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    const newsCommentObj = { newsId: newsId!, rateNumber: newValue! };

    addNewsRate.mutate(newsCommentObj);
  };

  const onSubmit = async (e: { title: string; describe: string }) => {
    addNewsComment.mutate({
      title: e.title,
      describe: e.describe,
      newsId: newsId!,
    });

    e.title = "";
    e.describe = "";

    queryClient.invalidateQueries({
      queryKey: ["newsReplyComments"],
    });
  };

  return (
    <div className="w-[83%] lg:w-[1119px] mx-auto">
      <NewsHeroSection
        news={data?.detailsNewsDto!}
        isLoading={isLoading}
        error={error}
      />
      <div className="flex justify-center mt-10">
        <div className="lg:w-[70%]">
          <div className="mt-7">
            {isLoading || error ? (
              <div className="flex flex-col gap-1">
                <Skeleton width="80%" height={7} />
                <Skeleton width="100%" height={7} count={14} />
              </div>
            ) : (
              <>
                <h1 className="font-[700] text-[27px] lg:text-[32px] text-text1 dark:text-darkText">
                  {data?.detailsNewsDto.title}
                </h1>
                <p className="font-[500] text-text2 dark:text-darkText mt-2 leading-7">
                  {loadDescribe(convertedDescribe)}
                </p>
              </>
            )}
          </div>
          <ShareBox />
          <Satisfaction
            nameData="مقاله"
            likeCount={data?.detailsNewsDto.currentLikeCount!}
            disLikeCount={data?.detailsNewsDto.currentDissLikeCount!}
            rateCount={data?.detailsNewsDto.currentRate!}
            currentUserRateNumber={data?.detailsNewsDto.currentUserRateNumber!}
            handleRateChange={handleRateChange}
            newsId={data?.detailsNewsDto.id}
            likeId={data?.detailsNewsDto.likeId!}
            isLike={data?.detailsNewsDto.currentUserIsLike!}
            isDislike={data?.detailsNewsDto.currentUserIsDissLike!}
          />
          <div className="newsDetailsCommentsSection">
            <h3 className="newsDetailsCommentsText">
              نظر کاربران درباره این مقاله
            </h3>
            <CommentForm
              onSubmit={onSubmit}
              validationSchema={commentFormSchema}
            />
            <Comments newsId={newsId} comments={comments!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewsDetails };
