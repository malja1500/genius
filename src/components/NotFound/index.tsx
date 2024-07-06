import notFoundImage from "../../assets/images/NotFound/not-found.svg";
import { Link } from "../common/Link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={notFoundImage} className="w-[80%] lg:w-[35%]" />
      <h1 className="font-bold text-xl lg:text-2xl -mt-10">
        صفحه مورد نظر یافت نشد !
      </h1>
      <Link className="bg-primary text-white px-8 py-3 rounded-[24px] mt-5">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export { NotFound };
