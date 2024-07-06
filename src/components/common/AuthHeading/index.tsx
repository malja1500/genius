interface AuthHeadingProps {
  title: string;
  description: string;
}

const AuthHeading = ({ title, description }: AuthHeadingProps) => {
  return (
    <>
      <h1 className="authToSiteText">{title}</h1>
      <p className="authToSiteDescription">{description}</p>
    </>
  );
};

export { AuthHeading };
