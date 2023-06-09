// Import react libraries
import { useTranslation } from "react-i18next";

// Import components
import { Brand } from "design-system/layout/Brand/Brand";

export interface DashboardProps {
  children: React.ReactNode;
}

export const Dashboard = ({ children }: DashboardProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col flex-1 bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center -m-2 lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-lg hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            <div className="flex ml-6 mr-auto lg:ml-0">
              <Brand />
            </div>

            <div className="flex items-center justify-end space-x-6 sm:ml-5">
              <div className="relative">
                <button
                  type="button"
                  className="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </button>
                <span className="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white">
                  {" "}
                  2{" "}
                </span>
              </div>

              <div className="relative">
                <button
                  type="button"
                  className="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                </button>
                <span className="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white">
                  {" "}
                  6{" "}
                </span>
              </div>

              <button
                type="button"
                className="flex items-center max-w-xs rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                <img
                  className="object-cover w-8 h-8 bg-gray-300 rounded-full"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/1/avatar-male.png"
                  alt=""
                />
                <span className="hidden ml-2 text-sm font-medium text-gray-900 md:block">
                  {" "}
                  Jacob Jones{" "}
                </span>
                <svg
                  className="w-4 h-4 ml-3 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <div className="hidden border-r border-gray-200 md:flex md:w-64 md:flex-col">
          <div className="flex flex-col pt-5 overflow-y-auto">
            <div className="flex flex-col justify-between flex-1 h-full px-4">
              <div className="space-y-4">
                <div>
                  <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                    Navigation
                  </p>
                  <nav className="flex-1 mt-4 space-y-1">
                    <a
                      href="/"
                      title=""
                      className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group">
                      Performance
                    </a>

                    <a
                      href="/"
                      title=""
                      className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group">
                      Hotjar
                      <span className="text-xs uppercase ml-auto font-semibold text-indigo-600 bg-indigo-50 border border-indigo-300 rounded-full inline-flex items-center px-2 py-0.5">
                        {" "}
                        New{" "}
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <main className="h-full">
            <div className="p-8 space-y-6">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};
