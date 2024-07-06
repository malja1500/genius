interface CourseItemDetailItemPRops {
  imageURL: string;
  label: string;
}

const CourseItemDetailItem = ({
  imageURL,
  label,
}: CourseItemDetailItemPRops) => {
  return (
    <div className="flex gap-1">
      <img src={imageURL} />
      <span className="font-[500] text-[14px] text-text1 dark:text-darkText">
        {label}
      </span>
    </div>
  );
};

export { CourseItemDetailItem };
