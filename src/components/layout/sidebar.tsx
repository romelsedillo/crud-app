"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { account } from "@/appwrite/appwrite";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CiUser } from "react-icons/ci";
import { CiViewTable } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";

const Sidebar = () => {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const checkUserSession = async () => {
    setLoading(true);
    try {
      const user = await account.get();
      setLoggedInUser(user);
    } catch (error) {
      router.push("/");
      console.log("No active session found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    checkUserSession();
    setLoading(true);
  }, []);

  const logout = async () => {
    setLoading(true);
    try {
      await account.deleteSession("current");
      setLoggedInUser(null);
      toast.success("Successfully logged out!");
      router.push("/");
    } catch (error) {
      toast.error("Logout failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="border-2 py-4 px-6 h-[570px]">
        <h1 className="text-2xl mb-4 text-center">Dashboard</h1>
        <hr />
        <div className="flex flex-col justify-between pt-4 h-[300px]">
          <div className="flex flex-col gap-2">
            <Link
              href={"/tables"}
              className="flex items-center gap-4 text-lg capitalize"
            >
              <CiViewTable />
              Tables
            </Link>
            <Link
              href={"/profile"}
              className="flex items-center gap-4 text-lg capitalize"
            >
              <CiUser />
              Profile
            </Link>
          </div>
          <div className="w-full flex justify-center">
            <Button onClick={logout} className="w-full">
              <CiLogout className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
