"use client";

import { Button } from "@/components/ui/button";
import { account, ID } from "../../../appwrite/appwrite";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RegisterForm from "@/components/layout/registerform";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Navbar from "@/components/layout/navbar";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (loggedInUser) {
      router.push("/");
    }

    setLoading(false);
  }, [loggedInUser, setLoading, router]);

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await account.create(ID.unique(), email, password, name);
      router.push("/dashboard");
      alert("Registration successful");
    } catch (error) {
      alert("Registration failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto">
      <Navbar />
      <div className="max-w-xs mx-auto p-6 rounded-md shadow-xl border">
        <h2 className="text-3xl font-semi mb-4 text-center">
          Register
        </h2>
        <RegisterForm />
        <div className="max-w-xs flex items-center gap-2 py-4 mx-auto">
          <hr className="border flex-grow" />
          <p className="text-xs">Or continue with</p>
          <hr className="border flex-grow" />
        </div>
        <div className="max-w-xs flex items-center mx-auto gap-6">
          <Button className="w-full gap-2 font-thin">
            <FcGoogle />
            Google
          </Button>
          <Button className="w-full gap-2 font-thin">
            <FaGithub />
            GitHub
          </Button>
        </div>
        <div className="mx-auto max-w-xs mt-8">
          <p className="text-xs">
            Already have an account?{" "}
            <Link href={"/"} className="font-medium underline">
              Login here.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
