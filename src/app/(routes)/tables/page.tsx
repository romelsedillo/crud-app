"use client";
import React, { useState, useEffect } from "react";
import { account } from "@/appwrite/appwrite";
import DataTable from "@/components/table/dataTable";
import Sidebar from "@/components/layout/sidebar";
import { ModeToggle } from "@/components/layout/modeToggle";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/layout/LoadingSpinner";
import { customerData } from "@/utils/customerData";

const TablePage: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const [data, setData] = useState([]);

  const checkUserSession = async () => {
    try {
      const user = await account.get();
      setLoggedInUser(user);
    } catch (error) {
      console.log("No active session found, redirecting to login");
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const appWriteData = await customerData();
      setData(appWriteData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    checkUserSession();
    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  console.log(data);
  return (
    <main className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar loggedInUser={loggedInUser} />
      </div>
      <div className="col-span-10 py-1">
        <div className="w-full p-3 flex items-center justify-between border-b">
          <p className="text-2xl">Customer Table</p>
          <ModeToggle />
        </div>
        <DataTable data={data}/>
      </div>
    </main>
  );
};

export default TablePage;
