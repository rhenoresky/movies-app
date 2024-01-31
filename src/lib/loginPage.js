"use server";

import { signIn } from "./auth";

export const login = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  const result = await signIn("credentials", { email, password }).catch(
    (err) => {
      if (err.type === undefined) return { success: true };
      if (err.type === "CredentialsSignin")
        return { error: "Invalid username or password" };
    }
  );

  return result;
};
