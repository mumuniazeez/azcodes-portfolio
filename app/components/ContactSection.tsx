import { Badge } from "~/components/ui/badge";

export default function ContactSection() {
  return (
    <section className="px-30 py-20 space-y-20 border-t-2 bg-grid-pattern">
      <div className="flex items-end justify-between">
        <div className="space-y-5">
          <Badge className="font-bold">// LET'S BUILD SOMETHING GREAT</Badge>
          <h3 className="text-5xl">
            GET IN{" "}
            <span className="p-2 neo-box bg-main font-bold w-fit ">
              TOUCH
            </span>
          </h3>
        </div>
        <p className="text-lg font-bold border-main border-l-5 ps-3 md:max-w-150 text-black/80">
          Have a project in mind, a position to fill, or just want to discuss software engineering? Send a direct message below!
        </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-y-10">
        <h3 className="text-5xl">
          COMING{" "}
          <span className="p-2 neo-box bg-main font-bold w-fit ">SOON</span>
        </h3>
        <p className="italic text-black/60">(psst. I'll start soon, comeback to check)</p>
      </div>
    </section>
  );
}
