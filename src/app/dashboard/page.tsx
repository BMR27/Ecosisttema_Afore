// components/Dashboard.js
import React from "react";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Image from 'next/image';


export default function Page() {
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <form>
              <h3 className="text-2xl font-bold tracking-tight">
                  Panel Administrativo para Buzon de Archivos
                  </h3>
              <br></br>
              <div className="centered-div">
                <Image
                  src="/assets/images/background/Afore_2.jpg"
                  alt=""
                  width={2500}
                  height={100}
                />
              </div>
           {/* <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-6 w-6 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full md:w-96 lg:w-128 appearance-none bg-background pl-10 pr-4 shadow-none"
              />
            </div> */}
          </form>
        </div>
        
      </main>
    </>
  );
}
