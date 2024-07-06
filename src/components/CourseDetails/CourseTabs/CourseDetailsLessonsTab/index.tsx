import { BlockInterface } from "../../../../types/block";

import { CustomTabPanel } from "../../../common/CustomTabPanel";
import { CourseDetailsAccordion } from "./CourseDetailsAccordion";

interface CourseDetailsLessonsTabProps {
  value: number;
  convertedDescribe: string | { blocks: BlockInterface[] };
}

const CourseDetailsLessonsTab = ({
  value,
  convertedDescribe,
}: CourseDetailsLessonsTabProps) => {
  return (
    <CustomTabPanel value={value} index={1}>
      <div className="flex flex-col gap-3 mt-2">
        {typeof convertedDescribe !== "string" &&
          convertedDescribe?.blocks.map(
            (block) =>
              block.type === "headline" &&
              block.data.lessons.map((lesson, lessonIndex) => (
                <CourseDetailsAccordion
                  lesson={lesson}
                  lessonIndex={lessonIndex}
                />
              ))
          )}
      </div>
    </CustomTabPanel>
  );
};

export { CourseDetailsLessonsTab };
