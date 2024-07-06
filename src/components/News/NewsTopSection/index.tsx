import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Dispatch, SetStateAction } from "react";

import { NEWS_SORT_TABS } from "../../../core/data/news/news-sort-tabs.data";

import { SearchBox } from "../../common/SearchBox";

interface NewsTopSectionProps {
  sort: string | undefined;
  setQuery: Dispatch<SetStateAction<string | undefined>>;
  setSort: Dispatch<SetStateAction<string | undefined>>;
  setSortType: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const NewsTopSection = ({
  sort,
  setQuery,
  setSort,
  setSortType,
  setCurrentPage,
}: NewsTopSectionProps) => {
  const handleChange = (event: any, newValue: string) => {
    setSort(newValue);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="newsSearchSortWrapper">
        <div className="w-[95%] lg:w-auto">
          <SearchBox
            placeholder="دنبال چی میگردی"
            isNews={true}
            setQuery={setQuery}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="w-[92%] lg:w-auto">
          <div className="newsSortTabsBoxWrapper">
            <Box>
              <Tabs
                value={sort}
                onChange={handleChange}
                classes={{
                  indicator: "hidden",
                }}
              >
                {NEWS_SORT_TABS.map((tab) => (
                  <Tab
                    key={tab.value}
                    value={tab.value}
                    label={tab.label}
                    classes={{
                      root: "newsSortTab",
                      selected: "newsSortActiveTab",
                    }}
                  />
                ))}
              </Tabs>
            </Box>
          </div>
        </div>
      </div>
      <div className="w-[92%] lg:w-[16%] customSelectBoxWrapper">
        <select
          className="customSelectBox"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="DESC">نزولی</option>
          <option value="ASC">صعودی</option>
        </select>
      </div>
    </div>
  );
};

export { NewsTopSection };
