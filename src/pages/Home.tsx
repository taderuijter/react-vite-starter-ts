// Import React libraries
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Import components
import { Layout } from "components/layout/Layout/Layout";
import { BlogHero } from "components/heros/BlogHero/BlogHero";

function Home() {
  return (
    <div id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Boilerplate - vite, typescript, cypress & i18n</title>
      </Helmet>
      <Layout>
        <BlogHero
          Link={Link}
          pages={[
            {
              id: "1",
              name: "Featured",
              href: "/featured",
              current: false,
            },
            {
              id: "2",
              name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              href: "/featured/this-is-the-blog-title",
              current: true,
            },
          ]}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          thumbnail="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-content/1/cover.png"
        />
      </Layout>
    </div>
  );
}

export default Home;
