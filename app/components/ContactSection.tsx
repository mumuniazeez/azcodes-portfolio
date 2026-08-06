import {
  ArrowUpRight,
  Copy,
  Email,
  Location,
  Message,
  Send,
  Sparkle,
  Time,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "~/components/ui/badge";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const messageSubjects: string[] = [
  "Tech Chat /  Coffee",
  "Freelance Project Inquiry",
  "Full-Time Role Offer",
  "Open Source Collab",
];

export default function ContactSection() {
  const [selectedMessageSubject, setSelectedMessageSubject] = useState(
    messageSubjects[0],
  );

  return (
    <section
      className="px-10  md:px-30 py-20 space-y-20 border-t-2 bg-grid-pattern"
      id="contact"
    >
      <div className="flex gap-5 items-start md:items-end justify-between flex-col md:flex-row">
        <div className="space-y-5">
          <Badge className="font-bold">// LET'S BUILD SOMETHING GREAT</Badge>
          <h3 className="text-3xl md:text-5xl">
            GET IN{" "}
            <span className="p-2 neo-box bg-main font-bold w-fit ">TOUCH</span>
          </h3>
        </div>
        <p className="text-lg font-bold border-main border-l-5 ps-3 md:max-w-150 text-black/80">
          Have a project in mind, a position to fill, or just want to discuss
          software engineering? Send a direct message below!
        </p>
      </div>
      <div className="flex items-start justify-between gap-10 flex-col md:flex-row">
        <div className="space-y-5 md:w-[50%]">
          <div className="neo-box p-6 bg-secondary-background h-full space-y-2">
            <div className="flex items-center gap-x-2">
              <HugeiconsIcon icon={Message} />
              <h3 className="text-2xl">DIRECT CONTACT</h3>
            </div>
            <p>
              Feel free to email me directly or schedule a call. I usually
              respond within 3 hours!
            </p>
            <div className="neo-box p-2 bg-secondary-background h-full gap-3 flex items-center justify-between flex-col lg:flex-row">
              <div className="flex items-center gap-x-2">
                <HugeiconsIcon icon={Email} />
                <p className="font-bold text-sm">mumuniazeez99@gmail.com</p>
              </div>
              <Button className="w-full lg:w-auto">
                <HugeiconsIcon icon={Copy} /> COPY
              </Button>
            </div>

            <hr className="border-2 my-6" />

            <div className="flex items-center gap-x-2">
              <HugeiconsIcon icon={Location} />
              <p className="font-bold">
                LOCATION: Lagos, Nigeria // Remote Worldwide
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <HugeiconsIcon icon={Time} />
              <p className="font-bold">
                TIMEZONE: West African Time (WAT // UTC+1)
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <HugeiconsIcon icon={Sparkle} />
              <p className="font-bold">RESPONSE RATE: ~3 HOURS</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <Button size={"lg"} className="w-full">
              GITHUB <HugeiconsIcon icon={ArrowUpRight} />
            </Button>
            <Button size={"lg"} className="w-full">
              LINKEDIN <HugeiconsIcon icon={ArrowUpRight} />
            </Button>
          </div>
        </div>
        <div className="neo-box p-6 bg-secondary-background md:w-[50%] space-y-2">
          <p className="text-sm font-bold text-black/70">
            // CHOOSE A SUITABLE SUBJECT:
          </p>
          <div className="flex items-center flex-wrap gap-3">
            {messageSubjects.map((subject, idx) => (
              <Button
                key={idx}
                variant={
                  selectedMessageSubject === subject ? "default" : "neutral"
                }
                onClick={() => setSelectedMessageSubject(subject)}
              >
                {subject}
              </Button>
            ))}
          </div>

          <form className="my-5 space-y-5">
            <div className="flex items-start justify-between gap-5">
              <div className="w-full">
                <Label htmlFor="contact-name">YOUR NAME *</Label>
                <Input
                  type="text"
                  placeholder="e.g John Doe"
                  name="contact-name"
                  id="contact-name"
                  required
                />
              </div>
              <div className="w-full">
                <Label htmlFor="contact-email">YOUR EMAIL *</Label>
                <Input
                  type="email"
                  placeholder="john@company.com"
                  name="contact-email"
                  id="contact-email"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <Label htmlFor="contact-message">MESSAGE DETAILS *</Label>
              <Textarea
                placeholder="e.g John Doe"
                name="contact-message"
                id="contact-message"
                required
              ></Textarea>
            </div>
            <Button className="w-full" type="submit">
              <HugeiconsIcon icon={Send} /> SEND DIRECT MESSAGE
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
