import { Link } from "../Link";

interface MainButtonProps {
  text: string;
  href: string;
}

const MainButton = ({ text, href }: MainButtonProps) => {
  return (
    <Link to={href} className="mainButton">
      {text}
    </Link>
  );
};

export { MainButton };
