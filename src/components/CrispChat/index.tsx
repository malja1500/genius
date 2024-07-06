import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b2e120e1-449b-4651-b62e-5f3f249cd603");
  }, []);

  return null;
};
