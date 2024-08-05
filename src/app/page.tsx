import LoginForm from "@/components/layout/loginform";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ModeToggle } from "@/components/layout/modeToggle";
import Navbar from "@/components/layout/navbar";

export default function HomePage() {
  return (
    <section className="mx-auto">
      <Navbar />
      <div className="max-w-xs mx-auto p-6 rounded-md shadow-xl border">
        <h2 className=" text-3xl font-semi mb-4 text-center">Login</h2>
        <LoginForm />
        <div className="max-w-xs flex items-center justify-between py-2 mx-auto text-xs">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember me</label>
          </div>
          <div>
            <Link href={"/password-recovery"} className="hover:underline">
              Forgot password
            </Link>
          </div>
        </div>
        <div className="max-w-xs flex items-center gap-2 py-2 mx-auto">
          <hr className="border flex-grow" />
          <p className="text-xs">Or continue with</p>
          <hr className="border flex-grow" />
        </div>
        <div className="max-w-xs flex items-center mx-auto py-2 gap-6">
          <Button className="w-full gap-2">
            <FcGoogle />
            Google
          </Button>
          <Button className="w-full gap-2">
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
