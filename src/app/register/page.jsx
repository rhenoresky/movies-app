import RegisterForm from "@/components/registerForm/RegisterForm";

const Register = () => {
  return (
    <div className="max-w-lg mx-auto my-10 bg-[#3F3351] p-8 rounded-xl shadow">
      <h1 className="text-4xl font-medium text-[#864879]">Register</h1>
      <p className="text-[#E9A6A6] mt-1">Hi, Create account here!</p>
      <RegisterForm />
    </div>
  );
};

export default Register;
