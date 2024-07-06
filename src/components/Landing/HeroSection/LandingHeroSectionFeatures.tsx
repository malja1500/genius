import { landingHeroSectionFeaturesItems } from "../../../core/data/landing/landingHeroSectionFeaturesItems";

import { LandingReportInterface } from "../../../types/landing-report";

interface LandingHeroSectionFeaturesProps {
  landingReport: LandingReportInterface | undefined;
}

const LandingHeroSectionFeatures = ({
  landingReport,
}: LandingHeroSectionFeaturesProps) => {
  return (
    <div className="landingFeaturesWrapper">
      {landingHeroSectionFeaturesItems(
        landingReport?.teacherCount || 0,
        landingReport?.courseCount || 0,
        landingReport?.studentCount || 0
      ).map((feature) => (
        <div key={feature.label} className="landingFeatureItem">
          <div className="landingFeatureItemImageWrapper">
            <img src={feature.icon} />
          </div>
          <div className="landingFeatureItemValuesWrapper">
            <span className="landingFeatureItemNumber">{feature.number}</span>
            <span className="landingFeatureItemLabel">{feature.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export { LandingHeroSectionFeatures };
