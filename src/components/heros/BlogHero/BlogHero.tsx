import { Breadcrumbs } from "components/navigation/Breadcrumbs/Breadcrumbs";

export interface BlogHeroProps {
  title: string;
  pages: { id: string; name: string; href: string; current: boolean }[];
  thumbnail: string;
  Link: React.ElementType;
  style?: string;
}

export const BlogHero = ({
  Link,
  pages,
  title,
  thumbnail,
  style = "py-8",
}: BlogHeroProps) => (
  <section className={`mx-auto max-w-7xl ${style}`}>
    <div className="max-w-7xl mx-auto text-center space-y-8">
      <h1 className="px-4 lg:px-20">{title}</h1>
      <div className="inline-block mx-auto">
        <Breadcrumbs Link={Link} pages={pages} />
      </div>
      <div className="w-full aspect-h-9 lg:aspect-h-6 overflow-hidden lg:rounded-md">
        <img src={thumbnail} alt={`Blog post: ${title}`} />
      </div>
    </div>
  </section>
);
