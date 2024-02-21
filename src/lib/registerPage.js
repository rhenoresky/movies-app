"use server";

export const register = async (prevState, formData) => {
  const data = Object.fromEntries(formData);

  const response = await fetch(`${process.env.API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  if (res.message === "success") {
    return { success: true };
  }
  if (res.statusCode === 400) {
    return { error: "Register Failed" };
  }
};
