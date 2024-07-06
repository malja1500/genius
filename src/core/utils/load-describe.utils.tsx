import React from "react";
import { BlockInterface } from "../../types/block";

export const loadDescribe = (
  convertedDescribe: string | { blocks: BlockInterface[] }
) => {
  if (typeof convertedDescribe === "string") {
    return <p className="courseDetailsParagraph">{convertedDescribe}</p>;
  } else {
    return convertedDescribe?.blocks?.map((block, ind) => {
      switch (block.type) {
        case "header":
          const HeaderTag = `h${block.data.level}`;
          return React.createElement(
            HeaderTag,
            { key: ind, className: "courseDetailsTitle" },
            block.data.text
          );

        case "paragraph":
          return (
            <p key={ind} className="courseDetailsParagraph">
              {block.data.text}
            </p>
          );

        case "list":
          if (block.data.style === "unordered") {
            return (
              <ul key={ind} className="courseDetailsList">
                {block.data.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            );
          } else if (block.data.style === "ordered") {
            return (
              <ol key={ind} className="courseDetailsList">
                {block.data.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            );
          }

        default:
          return null;
      }
    });
  }
};
