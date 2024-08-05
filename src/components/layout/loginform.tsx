"use client";
import { useState, useEffect } from "react";
import { account, ID } from "@/appwrite/appwrite";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkUserSession = async () => {
      setLoading(true);
      try {
        const user = await account.get();
        setLoggedInUser(user);
        router.push("/tables");
      } catch (error) {
        console.log("No active session found");
      } finally {
        setLoading(false);
      }
    };
    checkUserSession();
  }, [router]);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const session = await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setLoggedInUser(user);
      router.push("/tables");
      toast.success("Successfully logged in!");
    } catch (error) {
      toast.error("Login failed: " + error.message);
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  console.log(loggedInUser);
  return (
    <form
      onSubmit={login}
      className="max-w-xs mx-auto flex flex-col gap-2"
      autoComplete="on"
    >
      <Input
        name="email"
        className=" border border-slate-500 rounded outline-none focus-visible:ring-0"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        className=" border border-slate-500 rounded outline-none focus-visible:ring-0"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className="px-4 py-2 rounded" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
