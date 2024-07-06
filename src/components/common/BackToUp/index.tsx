import { ArrowUpward } from "@mui/icons-material";
import BackToUpButton from "@uiw/react-back-to-top";

const BackToUp = () => {
  return (
    <BackToUpButton as="div" className="bottom-24 right-9" controls >
      <ArrowUpward />
    </BackToUpButton>
  );
};

export { BackToUp };
