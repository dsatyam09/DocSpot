import { handleGoogleLogin } from "@/lib/actions";

const LoginPage = () => {
  return (
    <div>
      <form action={handleGoogleLogin}>
        <button>Login with google</button>
      </form>
    </div>
  );
};

export default LoginPage;
