import { landingServiceItems } from "../../../core/data/landing/landingServiceItems";

const LandingServicesMapped = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center gap-7 flex-col lg:flex-row mt-9 w-[90%]">
        {landingServiceItems.map((service) => (
          <div key={service.label} className="serviceBox">
            <img src={service.icon} className="w-[80px] h-[80px]" />
            <h4 className="font-[900] text-[24px] text-text1 dark:text-darkText mt-4">
              {service.label}
            </h4>
            <p className="text-text2 dark:text-darkText mt-2 text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { LandingServicesMapped };
