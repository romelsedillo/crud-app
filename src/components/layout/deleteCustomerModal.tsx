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

export function DeleteCustomerModal() {
  const sample = async () => {
    // Simulate a network request
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data saved successfully");
      }, 2000); // Simulates a 2-second delay
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="w-full font-thin text-red-500">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-red-500">
            Are you absolutely sure?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the data.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" variant="outline" size="sm">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              className="text-red-500"
              type="submit"
              variant="outline"
              size="sm"
              onClick={async () => {
                toast.promise(sample(), {
                  loading: "Deleting...",
                  success: <b>Customer has been deleted!</b>,
                  error: <b>Failed to add customer</b>,
                });
              }}
            >
              Continue
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
