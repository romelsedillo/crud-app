import React, { useState, useEffect } from "react";

import { account } from "@/appwrite/appwrite";
import DataTable from "@/components/table/dataTable";
import Sidebar from "@/components/layout/sidebar";
import { ModeToggle } from "@/components/layout/modeToggle";
import { useRouter } from "next/navigation";

const TablePage = () => {
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

  return (
    <main className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10 py-1">
        <div className="w-full p-3 flex items-center justify-between border-b">
          <p className="text-2xl">Table</p>
          <ModeToggle />
        </div>
        <DataTable />
      </div>
    </main>
  );
};

export default TablePage;
