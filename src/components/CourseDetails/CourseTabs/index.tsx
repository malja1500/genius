import { useState } from "react";

import { a11Props } from "../../../core/utils/tab-helper.utils";

import { BlockInterface } from "../../../types/block";

import { Tabs } from "../../common/Tabs";
import { Tab } from "../../common/Tabs/Tab";
import { CourseDetailsCommentsTab } from "./CourseDetailsCommentsTab";
import { CourseDetailsDescriptionTab } from "./CourseDetailsDescriptionTab";
import { CourseDetailsLessonsTab } from "./CourseDetailsLessonsTab";

interface CourseTabsProps {
  description: string;
  courseId: string;
}

const CourseTabs = ({ description, courseId }: CourseTabsProps) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  let convertedDescribe: string | { blocks: BlockInterface[] };

  try {
    const convertDescribe = JSON.parse(description);

    convertedDescribe = convertDescribe;
  } catch (error) {
    convertedDescribe = description;
  }

  return (
    <div
      className="bg-white dark:bg-gray-900 shadow-primaryShadow rounded-[24px] mt-10 px-7 py-5"
      aria-label="تب های صفحه جزئیات دوره"
    >
      <div className="border-b border-courseDetailsTabsBorder">
        <Tabs
          value={value}
          onChange={handleChange}
          className="text-text3"
          indicatorColor="primary"
          classes={{
            root: "border-[#000]",
            vertical: "border-[#000]",
          }}
        >
          <Tab
            label="توضیحات"
            classes={{ textColorPrimary: "coursesTab" }}
            {...a11Props(0)}
          />
          <Tab
            label="پیش‌نمایش‌ها"
            classes={{ textColorPrimary: "coursesTab" }}
            {...a11Props(1)}
          />
          <Tab
            label="نظرات کاربران"
            classes={{ textColorPrimary: "coursesTab" }}
            {...a11Props(2)}
          />
        </Tabs>
      </div>
      <CourseDetailsDescriptionTab
        value={value}
        convertedDescribe={convertedDescribe}
      />
      <CourseDetailsLessonsTab
        value={value}
        convertedDescribe={convertedDescribe}
      />
      <CourseDetailsCommentsTab value={value} courseId={courseId} />
    </div>
  );
};

export { CourseTabs };
