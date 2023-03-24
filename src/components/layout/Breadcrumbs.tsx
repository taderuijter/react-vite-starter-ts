import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

// Input type
export interface BreadcrumbsType {
  pages: { id: string; name: string; href: string; current: boolean }[];
}

export const Breadcrumbs = ({ pages }: BreadcrumbsType) => (
  <nav
    className="flex"
    aria-label="Breadcrumb"
    itemScope
    itemType="http://schema.org/BreadcrumbList">
    <ol className="flex items-center space-x-4">
      <li
        itemScope
        itemProp="itemListElement"
        itemType="http://schema.org/ListItem">
        <div itemProp="item">
          <Link
            to="/"
            className="text-gray-400 hover:text-gray-500"
            itemProp="url">
            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </div>
        <meta itemProp="position" content="1" />
      </li>
      {pages.map((page, index) => (
        <li
          key={page.name}
          itemScope
          itemProp="itemListElement"
          itemType="http://schema.org/ListItem">
          <div className="flex items-center">
            <ChevronRightIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <Link
              to={page.href}
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              aria-current={page.current ? "page" : undefined}
              itemProp="name">
              {page.name}
            </Link>
          </div>
          <meta itemProp="position" content={String(index + 2)} />
        </li>
      ))}
    </ol>
  </nav>
);
