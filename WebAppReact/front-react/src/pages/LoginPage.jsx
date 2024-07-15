import { LoginForm } from "../components/LoginForm";
import LayoutBasic from "../layouts/LayoutBasic";

function LoginPage() {
  return (
    <LayoutBasic className="flex justify-center items-center w-screen mx-auto h-[720px]">
      <LoginForm />
    </LayoutBasic>
  );
}

export default LoginPage;
