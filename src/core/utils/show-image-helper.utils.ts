import blankThumbnail from "../../assets/images/Courses/blank-thumbnail.jpg";

export const handleShowImage = (image: string) =>
  image == undefined ||
  image === "Not-set" ||
  image === "not-set" ||
  image === "undefined" ||
  image === "<string>" ||
  !image
    ? blankThumbnail
    : image;
