"use client";
import LoginForm from "@/components/layout/loginform";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Navbar from "@/components/layout/navbar";
import { account } from "@/appwrite/appwrite";
import { OAuthProvider } from "appwrite";
import { toast } from "react-hot-toast";

export default function HomePage() {
  const handleGoogleLogin = async () => {
    try {
      console.log("Starting Google login process...");
      await account.createOAuth2Session(
        OAuthProvider.Google,
        "http://localhost:3000/tables",
        "http://localhost:3000"
      );
      toast.success("Successfully logged in!");
    } catch (error) {
      console.error("Error during Google login:", error);
      toast.error(`Error during Google login: ${error.message}`);
    }
  };

  const handleGitHubLogin = async () => {
    try {
      console.log("Starting GitHub login process...");
      await account.createOAuth2Session(
        OAuthProvider.Github,
        "http://localhost:3000/tables",
        "http://localhost:3000"
      );
      toast.success("Successfully logged in!");
    } catch (error) {
      console.error("Error during GitHub login:", error);
      toast.error(`Error during GitHub login: ${error.message}`);
    }
  };

  return (
    <section className="mx-auto">
      <Navbar />
      <div className="max-w-xs mx-auto p-6 rounded-md shadow-xl border">
        <h2 className="text-3xl font-semi mb-4 text-center">Login</h2>
        <LoginForm />
        <div className="max-w-xs flex items-center justify-end py-2 mx-auto text-xs">
          <div>
            <Link
              href={"/password-recovery"}
              className="hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="max-w-xs flex items-center gap-2 py-2 mx-auto">
          <hr className="border flex-grow" />
          <p className="text-xs">Or continue with</p>
          <hr className="border flex-grow" />
        </div>
        <div className="max-w-xs flex items-center mx-auto py-2 gap-6">
          <Button
            onClick={handleGoogleLogin}
            className="w-full gap-2 font-thin"
          >
            <FcGoogle />
            Google
          </Button>
          <Button
            onClick={handleGitHubLogin}
            className="w-full gap-2 font-thin"
          >
            <FaGithub />
            GitHub
          </Button>
        </div>
        <div className="mx-auto max-w-xs mt-8">
          <p className="text-xs">
            Don&apos;t have an account?{" "}
            <Link href={"/register"} className="font-medium hover:underline">
              Register here.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
