import { Container } from "components/layout/Container/Container";

export interface FeaturedHeroProps {
  content: React.ReactNode;
  featured: {
    title: string;
    category: string;
    href: string;
    thumbnail: string;
  }[];
  Link: React.ElementType;
  bg?: string;
}

export const FeaturedHero = ({
  content,
  featured,
  Link,
  bg = "bg-blue-900",
}: FeaturedHeroProps) => (
  <div className="relative">
    <Container style="px-0 lg:px-8">
      <div className="flex-row lg:flex items-center">
        <div className="w-full lg:w-1/2 space-y-8 pt-20 pb-8 px-4 lg:pl-0">
          {content}
        </div>
        <div
          className={`w-full lg:w-1/2 space-y-4 z-10 p-8 lg:pt-20 lg:pr-0 ${bg}`}>
          <p className="text-lg font-bold text-white">Featured Articles</p>

          {featured.slice(0, 3).map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block space-y-2 overflow-hidden bg-white p-4 rounded-2xl hover:-translate-y-1 transition-all duration-200 transform">
              <div className="flex items-start lg:items-center space-x-4">
                <img
                  className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cover"
                  src={item.thumbnail}
                  alt={item.title}
                />

                <div className="flex-1 space-y-2">
                  <p className="text-xs font-medium text-gray-900">
                    {item.category}
                  </p>
                  <p className="text-base font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                    {item.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
    <div className="hidden lg:block absolute w-1/3 h-full bg-slate-900 top-0 right-0 z-0"></div>
  </div>
);

export default FeaturedHero;
