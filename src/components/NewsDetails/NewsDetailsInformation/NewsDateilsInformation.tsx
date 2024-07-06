import React from "react";

interface NewsDetailsInformation {
  imageURL: string;
  title: string;
}

const NewsDetailsInformation = ({
  imageURL,
  title,
}: NewsDetailsInformation) => {
  return (
    <div className="border-b border-b-courseDetailsInformationBox dark:border-b-[#403f3f] mx-auto py-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-[500] text-text2 dark:text-darkText">
            {title}
          </span>
          <div className="w-[40px] h-[40px] rounded-full bg-primary flex justify-center items-center">
            <img src={imageURL} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewsDetailsInformation };
