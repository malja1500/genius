export interface SecurityInfo {
  nationalIMageAddress: string | null;
  verifyNationalImage: boolean;
  twoStepAuth: string | boolean;
  recoveryEmail: string;
  baseUrl: string | null;
}
