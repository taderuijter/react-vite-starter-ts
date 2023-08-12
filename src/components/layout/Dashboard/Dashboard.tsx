import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/20/solid";

interface DashboardProps {
  children: React.ReactNode;
}

export const Dashboard = ({ children }: DashboardProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white border-b border-gray-200 flex-shrink-0">
        <div className="px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center -m-2 lg:hidden">
              <button
                onClick={toggleSidebar}
                type="button"
                className="inline-flex items-center justify-center p-2">
                <Bars3Icon className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="flex ml-6 mr-auto lg:ml-0">
              <div className="flex items-center flex-shrink-0">
                <div className="font-semibold text-lg">Scanseedo</div>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-6 sm:ml-5">
              <div className="flex items-center max-w-xs space-x-2">
                <button
                  type="button"
                  className="bg-white rounded-full p-2 hover:bg-slate-100 focus:ring-1 focus:ring-black">
                  <ArrowRightOnRectangleIcon className="w-[18px] h-[18px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-grow">
        <div
          className={`fixed top-0 left-0 h-screen w-full md:w-64 border-r border-gray-200 md:flex-col py-8 px-4 flex-shrink-0 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:h-auto bg-white ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:static z-50 md:border-none md:z-auto`}>
          <button
            type="button"
            className="absolute top-[10px] right-[10px] bg-blue-700 p-2 text-white rounded-full md:hidden"
            onClick={toggleSidebar}>
            <XMarkIcon className="w-6 h-6" />
          </button>

          <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Dashboard
          </p>
          <nav className="flex-1 mt-4 space-y-1">
            <a
              href="/"
              title=""
              className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group">
              Websites
            </a>

            <a
              href="/"
              title=""
              className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group">
              Pages
            </a>
          </nav>
        </div>

        <main className="flex flex-col flex-grow p-8 bg-slate-100 space-y-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
};
