import Image from "next/image";
import RegisterForm from "@/components/registerForm/RegisterForm";

const Register = () => {
  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-4xl font-medium">Register</h1>
      <p className="text-slate-500">Hi, Welcome back 👋</p>

      <div className="my-5">
        <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
          <Image
            src="https://www.svgrepo.com/show/355037/google.svg"
            className="w-6 h-6"
            alt="Icon"
            width={400}
            height={400}
          />
          <span>Register with Google</span>
        </button>
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;
