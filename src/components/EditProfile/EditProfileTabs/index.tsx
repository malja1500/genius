import { useState } from "react";

import { a11Props } from "../../../core/utils/tab-helper.utils";

import { Tabs } from "../../common/Tabs";
import { Tab } from "../../common/Tabs/Tab";
import { EditProfileEditPasswordTab } from "./EditProfileEditPasswordTab";
import { EditProfileGeneralSettingsTab } from "./EditProfileGeneralSettingsTab";
import { EditProfileSecurityTab } from "./EditProfileSecurityTab";

const EditProfileTabs = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: number) => setValue(newValue);

  return (
    <>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary">
        <Tab
          label="اطلاعات عمومی"
          className={`dark:text-darkText ${
            value == 0 && "dark:text-primaryColor"
          }`}
          {...a11Props(0)}
        />
        <Tab
          label="ویرایش رمز عبور"
          className={`dark:text-darkText ${
            value == 1 && "dark:text-primaryColor"
          }`}
          {...a11Props(1)}
        />
        <Tab
          label="تنظیمات امنیتی"
          className={`dark:text-darkText ${
            value == 2 && "dark:text-primaryColor"
          }`}
          {...a11Props(2)}
        />
      </Tabs>
      <EditProfileGeneralSettingsTab value={value} />
      <EditProfileEditPasswordTab value={value} />
      <EditProfileSecurityTab value={value} />
    </>
  );
};

export { EditProfileTabs };
