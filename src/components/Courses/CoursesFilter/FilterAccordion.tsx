import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Accordion } from "../../common/Accordion";
import { AccordionSummary } from "../../common/Accordion/AccordionSummary";
import { AccordionDetails } from "../../common/Accordion/AccordionDetails";

interface FilterAccordionProps {
  title: string;
  children?: React.ReactNode;
  isOpen?: boolean;
}

const FilterAccordion = ({ title, children, isOpen }: FilterAccordionProps) => {
  return (
    <Accordion
      classes={{
        root: "before:hidden border-solid border-b-[1px] last:border-b-[0px] border-filterAccordionBorder dark:border-[#262121] bg-transparent",
      }}
      defaultExpanded={isOpen}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        className="font-[500] text-text1 dark:text-darkText"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export { FilterAccordion };
