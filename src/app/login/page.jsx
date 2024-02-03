import LoginForm from "@/components/loginForm/LoginForm";

const Login = () => {
  return (
    <div className="max-w-lg mx-auto my-10 bg-[#3F3351] p-8 rounded-xl shadow">
      <h1 className="text-4xl font-medium text-[#864879]">Login</h1>
      <p className="text-[#E9A6A6] mt-1">Hi, Welcome back!</p>
      <LoginForm />
    </div>
  );
};

export default Login;
