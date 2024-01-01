import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import React from "react";

function AddItemView() {
  return (
    <Sheet>
      <SheetTrigger className="border rounded-md p-2.5 bg-slate-900 text-white font-medium text-sm capitalize">add new</SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default AddItemView;
