// Import react libraries
import { useTranslation } from "react-i18next";

// Import components
import { Brand } from "design-system/layout/Brand/Brand";
import { InternalLink } from "design-system/actions/Links/Links";

export interface DashboardProps {
  children: React.ReactNode;
}

export const Dashboard = ({ children }: DashboardProps) => {
  const { t } = useTranslation();

  return (
    <>
      <header className="bg-white border-b border-gray-200 fixed w-full z-50">
        <div className="px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex ml-6 mr-auto lg:ml-0">
              <Brand />
            </div>

            <div className="flex items-center justify-end space-x-6 sm:ml-5"></div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-[65px] h-full">
        <div className="hidden border-r border-gray-200 lg:flex lg:w-64 lg:flex-col fixed h-screen overflow-y-auto">
          <div className="space-y-4 px-4 py-6">
            <div>
              <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Navigation
              </p>
              <nav className="flex-1 mt-4 space-y-1">
                <InternalLink
                  text={t("components.navbar.links.home")}
                  href="/"
                  styling="default"
                />
                <InternalLink
                  text={t("components.navbar.links.inputs")}
                  href="/inputs"
                  styling="default"
                />
                <InternalLink
                  text={t("components.navbar.links.users")}
                  href="/users"
                  styling="default"
                />
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 relative ml-0 lg:ml-64">
          <main className="overflow-y-auto p-8 space-y-6">{children}</main>
        </div>
      </div>
    </>
  );
};
