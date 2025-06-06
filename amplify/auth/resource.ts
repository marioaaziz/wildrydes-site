import { auth } from "@aws-amplify/backend";

export const authResource = auth({
  loginWith: auth.LoginMechanism.EMAIL,
  userAttributes: {
    email: {
      required: true,
      mutable: false,
    },
  },
  passwordPolicy: {
    minLength: 8,
    requireLowercase: true,
    requireUppercase: true,
    requireNumbers: true,
    requireSymbols: false,
  },
  mfa: {
    mode: "OFF",
  },
});
