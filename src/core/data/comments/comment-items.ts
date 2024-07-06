import { CommentItemsInterface } from "../../../types/course-details-comments-interface";

export const commentItems: CommentItemsInterface[] = [
  {
    id: 1,
    image: "/src/assets/images/CourseDetails/Comments/Avatars/avatar-1.png",
    title: "محمد زمانی",
    message:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون.",
    createdAt: "2 روز پیش",
    courseLikesCount: 7,
    isChildren: false,
    children: [
      {
        id: 2,
        image: "/src/assets/images/CourseDetails/Comments/Avatars/avatar-2.png",
        title: "ساغر کبابی",
        message:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه",
        createdAt: "دیروز",
        courseLikesCount: 7,
        isChildren: true,
      },
      {
        id: 3,
        image: "/src/assets/images/CourseDetails/Comments/Avatars/avatar-2.png",
        title: "کباب ساغری",
        message:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه",
        createdAt: "دیروز",
        courseLikesCount: 7,
        isChildren: true,
      },
    ],
  },
  {
    id: 4,
    image: "/src/assets/images/CourseDetails/Comments/Avatars/avatar-3.png",
    title: "محسن حسنی",
    message:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
    createdAt: "12 فروردین 14",
    courseLikesCount: 7,
    isChildren: false,
  },
  {
    id: 5,
    image: "/src/assets/images/CourseDetails/Comments/Avatars/avatar-3.png",
    title: "نیکی سمیعی",
    message:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون.",
    createdAt: "16 فروردین 1402",
    courseLikesCount: null,
    isChildren: false,
  },
];
