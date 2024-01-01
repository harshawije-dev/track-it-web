import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddItemView from "@/pages/AddItemView";
import ItemHistoryView from "@/pages/ItemHistoryView";
import React from "react";

function InventoryPage() {
  return (
    <div className="w-full px-6 py-3 border rounded-lg">
      <section className="p-4">
        <header className="space-y-5 mb-10">
          <div className="flex flex-row justify-between items-center">
            <h2 className="capitalize font-semibold text-xl">Table Name</h2>
            <AddItemView />
          </div>
          <div className="flex flex-row">
            <Input type="search" className="flex-grow" />
          </div>
        </header>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Inventory Number</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Estate</TableHead>
              <TableHead>Purchase Date</TableHead>
              <TableHead>Reference Number</TableHead>
              <TableHead className="text-right capitalize">options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell className="flex flex-wrap w-[250px]">
                Cannon Image formula DR C240 - Duplex
              </TableCell>
              <TableCell>Hill Stream</TableCell>
              <TableCell>2020/01/25</TableCell>
              <TableCell>R1098890V</TableCell>
              <TableCell className="text-right">
                <ItemHistoryView />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
}

export default InventoryPage;
