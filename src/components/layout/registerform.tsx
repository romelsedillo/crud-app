"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { account, ID } from "@/appwrite/appwrite";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function RegisterForm() {
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
      router.push("/tables");
      alert("Registration successful");
    } catch (error) {
      alert("Registration failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={register}
      className="max-w-xs mx-auto flex flex-col items-center gap-2"
    >
      <div className="w-full flex flex-col items-start gap-2">
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
          type="text"
          className=" border border-slate-500 rounded outline-none focus-visible:ring-0"
        />
      </div>
      <div className="w-full flex flex-col items-start gap-2">
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          type="text"
          className="border border-slate-500 rounded outline-none focus-visible:ring-0"
        />
      </div>
      <div className="w-full flex flex-col items-start gap-2">
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          type="password"
          className="border border-slate-500 rounded outline-none focus-visible:ring-0"
        />
      </div>
      <div className="flex flex-col items-start w-full">
        <Button type="submit" className="w-full py-1 rounded">
          Register
        </Button>
      </div>
    </form>
  );
}
