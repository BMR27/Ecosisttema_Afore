'use client';

import { useState } from 'react';
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

type SubItemsState = {
  [key: string]: boolean;
};

const Sidebar: React.FC = () => {
  const [openSubItems, setOpenSubItems] = useState<SubItemsState>({});
  const router = useRouter();

  const toggleSubItems = (item: string) => {
    setOpenSubItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const goToHome = () => {
    router.push('/');
  }

  return (
    <div className="hidden border-r bg-muted/40 md:block w-64 lg:w-80">
      <div className="flex flex-col h-screen">
        <div className="flex items-center h-14 border-b px-4 lg:h-16 lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span>Acme Inc</span>
          </Link>
          <button className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="mt-4">
            <Link href="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary">
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <div className="mt-1">
              <button
                onClick={() => toggleSubItems('buzon')}
                className="flex items-center w-full gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary focus:outline-none"
              >
                <Package className="h-4 w-4" />
                Buzón{' '}
                {openSubItems['buzon'] ? (
                  <ChevronUp className="h-4 w-4 ml-auto" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-auto" />
                )}
              </button>
              {openSubItems['buzon'] && (
                <div className="ml-6 mt-1 space-y-1 transition-all duration-300">
                  <Link href="/buzon-send" className="block px-3 py-2 text-muted-foreground hover:text-primary bg-muted rounded-lg">
                    Buzón Envio
                  </Link>
                  <Link href="/buzon-receipt" className="block px-3 py-2 text-muted-foreground hover:text-primary bg-muted rounded-lg">
                    Buzón Recepcion
                  </Link>
                </div>
              )}
            </div>
            <Link href="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary">
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Upgrade to Pro</h3>
            <p className="text-sm text-muted-foreground">Unlock all features and get unlimited access to our support team.</p>
            <button className="mt-2 w-full px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
