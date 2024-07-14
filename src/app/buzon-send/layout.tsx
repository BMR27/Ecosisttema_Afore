import Sidebar from "@/components/layouts/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Satia Project",
    description: "Panel Adminstrativo para Buzon de Archivos",
};

export default function BuzonSendLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 min-h-screen">
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
}
