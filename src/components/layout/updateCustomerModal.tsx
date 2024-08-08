"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";

export function UpdateCustomerModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const sample = async () => {
    // Simulate a network request
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data saved successfully");
      }, 2000); // Simulates a 2-second delay
    });
  };

  // const handleSave = async () => {
  //   try {
  //     await sample();
  //     toast.success("Customer updated successfully!");
  //   } catch (error) {
  //     toast.error("Failed to update customer");
  //   }
  // };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="w-full font-thin">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit customer</DialogTitle>
          <DialogDescription>
            {/* Make changes to your profile here. Click save when you&apos;re done. */}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input id="email" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input id="address" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={async () => {
                toast.promise(sample(), {
                  loading: "Saving...",
                  success: <b>New customer added!</b>,
                  error: <b>Failed to add customer</b>,
                });
              }}
            >
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
