'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  Bell,
  Package,
  Package2,
  Home,
  LineChart,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type SubItemsState = {
  [key: string]: boolean;
};

const Sidebar: React.FC = () => {
  const [openSubItems, setOpenSubItems] = useState<SubItemsState>({});
  const router = useRouter();

  // Toggle sub-item visibility
  const toggleSubItems = useCallback((item: string) => {
    setOpenSubItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  }, []);

  // Navigate to home page
  const goToHome = () => {
    router.push('/');
  };

  // Prevent dropdown from closing when clicking inside
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click event from bubbling up
  };

  return (
    <div className="hidden md:block w-64 lg:w-80 text-[#515151] text-[16px] font-poppins">
      <div className="flex flex-col h-screen">
        <div className="flex items-center h-14 border-b px-4 lg:h-16 lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-25 w-6" />
            <div className="container">
              <div className="centered-div">
                <Image
                  src="/assets/images/background/Logo_Afore.jpg"
                  alt=""
                  width={125}
                  height={100}
                />
              </div>
            </div>
          </Link>
          <button className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="mt-4 space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-2 bg-white text-black hover:bg-[#28603B] hover:text-white transition-colors duration-300"
          >
            <Home className="h-4 w-4" />
            Inicio
          </Link>
            <div>
            <button
              onClick={() => toggleSubItems('buzon')}
              className="flex items-center w-full gap-3 rounded-lg px-3 py-2 bg-white text-black hover:bg-[#28603B] hover:text-white focus:outline-none transition-colors duration-300"
            >
              <Package className="h-4 w-4" />
              Buzón de Archivos
              {openSubItems['buzon'] ? (
                <ChevronUp className="h-4 w-4 ml-auto" />
              ) : (
                <ChevronDown className="h-4 w-4 ml-auto" />
              )}
            </button>
              <div
                className={`ml-6 mt-1 space-y-1 transition-all duration-300 ${openSubItems['buzon'] ? 'block' : 'hidden'}`}
              >
               <Link
                  href="/buzon-send"
                  className="block px-3 py-2 bg-white text-black hover:bg-[#28603B] hover:text-white rounded-lg transition-colors duration-300"
                  onClick={handleLinkClick} // Prevent dropdown from closing
                >
                  Buzón Envio
                </Link>
                <Link
                  href="/buzon-receipt"
                  className="block px-3 py-2 bg-white text-black hover:bg-[#28603B] hover:text-white rounded-lg transition-colors duration-300"
                  onClick={handleLinkClick} // Prevent dropdown from closing
                >
                  Buzón Recepcion
                </Link>
              </div>
            </div>
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 bg-white text-black hover:bg-[#28603B] hover:text-white transition-colors duration-300"
            >
              <LineChart className="h-4 w-4" />
              Consulta Bitacora
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
