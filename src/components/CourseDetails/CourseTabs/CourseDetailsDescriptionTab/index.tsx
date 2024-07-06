import { loadDescribe } from "../../../../core/utils/load-describe.utils";

import { BlockInterface } from "../../../../types/block";

import { CustomTabPanel } from "../../../common/CustomTabPanel";
interface CourseDetailsDescriptionTabProps {
  value: number;
  convertedDescribe: string | { blocks: BlockInterface[] };
}

const CourseDetailsDescriptionTab = ({
  value,
  convertedDescribe,
}: CourseDetailsDescriptionTabProps) => {
  return (
    <CustomTabPanel value={value} index={0}>
      {loadDescribe(convertedDescribe)}
    </CustomTabPanel>
  );
};

export { CourseDetailsDescriptionTab };
