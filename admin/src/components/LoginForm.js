import { useSession, signIn } from "next-auth/react";

function LoginForm() {
  return (
    <div className="center">
      <h1>LoGo</h1>
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-input"
            v-model="username"
            placeholder=" "
          />
          <label class="form-label">Email address</label>
          <i class="ri-at-line form-icon"></i>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-input"
            placeholder=" "
            v-model="password"
          />
          <label class="form-label">Password</label>
          <i class="ri-lock-line form-icon"></i>
        </div>
        <button type="submit" class="btn-submit">
          Login
        </button>
      </form>
      <p className="mb-10">----------- or -----------</p>
      <button
              onClick={() => signIn("google")}
              className="bg-darkAbu p-2 px-4 rounded-lg hover:bg-gray-500 hover:border-2 hover:border-black"
            >
              Login with Google
            </button>
    </div>
  );
}

export default LoginForm;
