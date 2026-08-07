import { Badge } from "~/components/ui/badge";

export default function ArticleSection() {
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
      <div className="flex items-center justify-center flex-col gap-y-10">
        <h3 className="text-3xl md:text-5xl">
          COMING{" "}
          <span className="p-2 neo-box bg-main font-bold w-fit ">SOON</span>
        </h3>
        <p className="italic text-black/60">
          (psst. I'll start soon, comeback to check)
        </p>
      </div>
    </section>
  );
}
