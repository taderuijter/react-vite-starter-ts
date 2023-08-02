import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

// Input type
export interface BreadcrumbsProps {
  pages: { id: string; name: string; href: string; current: boolean }[];
  Link: React.ElementType;
}

export const Breadcrumbs = ({ pages, Link }: BreadcrumbsProps) => (
  <nav
    className="flex"
    aria-label="Breadcrumb"
    itemScope
    itemType="http://schema.org/BreadcrumbList">
    <ol className="flex items-center space-x-4 list-none">
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
            {page.current ? (
              <div
                itemScope
                itemType="https://schema.org/WebPage"
                itemProp="item">
                <span
                  className="ml-4 text-sm font-medium text-gray-400"
                  itemProp="name">
                  {page.name}
                </span>
                <meta itemProp="position" content={String(index + 2)} />
              </div>
            ) : (
              <div
                itemScope
                itemType="https://schema.org/WebPage"
                itemProp="item">
                <Link
                  to={page.href}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  itemProp="url"
                  itemID={page.href}>
                  <span itemProp="name">{page.name}</span>
                </Link>
                <meta itemProp="position" content={String(index + 2)} />
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  </nav>
);
