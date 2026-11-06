import { Badge } from "~/components/ui/badge";
import ArticleCard from "./ArticleCard";
import { Button } from "./ui/button";
import { Link } from "react-router";

export const BLOG_SITE_URL = "https://blogs.azcodes.dev";
export interface BlogPost {
  topicKey: string;
  title: string;
  description: string;
  badges: string[];
  link: string;
  slug: string;
  createdAt: string;
  featured: boolean;
  readTime: string;
}

export default function ArticleSection({
  blogPosts,
}: {
  blogPosts: BlogPost[];
}) {
  return (
    <section
      className="px-10  md:px-30 py-20 space-y-20 border-t-2"
      id="article"
    >
      <div className="flex gap-5 items-start md:items-end justify-between flex-col md:flex-row">
        <div className="space-y-3">
          <Badge className="font-bold">// THOUGHTS & ARTICLES</Badge>
          <h3 className="text-3xl md:text-5xl">
            TECHNICAL{" "}
            <span className="p-2 neo-box bg-main font-bold w-fit ">
              ARTICLES
            </span>
          </h3>
        </div>
        <p className="text-lg font-bold border-main border-l-5 ps-3 md:max-w-150 text-black/80">
          Insights on my view on topics in the tech space. Share my view of the
          tech industry, and my experience as a full-stack developer.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {blogPosts.slice(0, 3).map((blog) => (
          <ArticleCard key={blog.link} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={BLOG_SITE_URL} target="_blank">
          <Button>See All</Button>
        </Link>
      </div>
    </section>
  );
}
