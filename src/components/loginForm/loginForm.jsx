"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { login } from "@/lib/loginPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(login, undefined);

  useEffect(() => {
    state?.error &&
      toast.error(state?.error, {
        position: "bottom-right",
      });

    state?.success && router.push("/");
  }, [state, router]);

  return (
    <>
      <form className="my-10" action={formAction}>
        <div className="flex flex-col space-y-5">
          <label htmlFor="email">
            <p className="font-medium text-[#E9A6A6] pb-2">Email address</p>
            <input
              name="email"
              type="email"
              className="w-full py-3 border border-[#E9A6A6] bg-[#864879] rounded-lg px-3 focus:outline-none focus:border-[rgb(251,178,178)] hover:shadow placeholder-[#E9A6A6]"
              placeholder="Enter email address"
            />
          </label>
          <label htmlFor="password">
            <p className="font-medium text-[#E9A6A6] pb-2">Password</p>
            <input
              name="password"
              type="password"
              className="w-full py-3 border border-[#E9A6A6] bg-[#864879] rounded-lg px-3 focus:outline-none focus:border-[rgb(251,178,178)] hover:shadow placeholder-[#E9A6A6]"
              placeholder="Enter your password"
            />
          </label>
          <button className="w-full py-3 font-medium text-[#864879] bg-[#E9A6A6] hover:bg-[#fcb3b3] rounded-lg border-[#864879] hover:shadow inline-flex space-x-2 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            <span>Login</span>
          </button>
          <p className="text-center text-[#864879]">
            Not registered yet?&nbsp;
            <Link href="/register" className="text-[#E9A6A6] font-medium inline-flex space-x-1 items-center">
              <span>Register now</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#E9A6A6]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
