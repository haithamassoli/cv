import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

const SELECTED_PROJECT_TITLES = new Set([
  "Little Muslim",
  "Sitr",
  "Aoun",
  "Kashaf Abi Ja'far",
  "pastehtml",
  "Gift",
  "TeleStream",
  "Malabji",
  "Naqi: Halal Video Filter",
  "EECommittee",
  "Tawsilah Abshir",
  "Azkari / Dhikr",
  "Fazawwijuhu",
  "Al-Tibyan Educational Center",
  "Sada",
  "Ghadd",
  "Horizon",
  "cohere-transcribe",
]);

const SELECTED_PROJECTS = RESUME_DATA.projects.filter((project) =>
  SELECTED_PROJECT_TITLES.has(project.title),
);
const PROJECTS = [
  ...SELECTED_PROJECTS,
  ...RESUME_DATA.projects.filter(
    (project) => !SELECTED_PROJECT_TITLES.has(project.title),
  ),
];

export const metadata: Metadata = {
  title: "Haitham Assoli | Software Engineer",
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:px-10 print:py-0">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold print:text-2xl">
              {RESUME_DATA.name}
            </h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a
                  aria-label="Email"
                  href={`mailto:${RESUME_DATA.contact.email}`}
                >
                  <MailIcon className="size-4" />
                </a>
              </Button>
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a aria-label="Phone" href={`tel:${RESUME_DATA.contact.tel}`}>
                  <PhoneIcon className="size-4" />
                </a>
              </Button>
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a
                  aria-label="Portfolio"
                  href={RESUME_DATA.personalWebsiteUrl}
                  target="_blank"
                >
                  <GlobeIcon className="size-4" />
                </a>
              </Button>
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a aria-label={social.name} href={social.url} target="_blank">
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-wrap gap-x-2 font-mono text-muted-foreground print:flex print:text-[10px]">
              <a
                className="underline"
                href={`mailto:${RESUME_DATA.contact.email}`}
              >
                {RESUME_DATA.contact.email}
              </a>
              {RESUME_DATA.contact.social.slice(0, 2).map((social) => (
                <a className="underline" href={social.url} key={social.name}>
                  {social.name}
                </a>
              ))}
              <a className="underline" href={RESUME_DATA.personalWebsiteUrl}>
                cv.assoli.site
              </a>
            </div>
          </div>

          <Avatar className="size-28 print:hidden">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        <Section>
          <h2 className="text-xl font-bold print:text-xl">Summary</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold print:text-xl">Experience</h2>
          {RESUME_DATA.work.map((work) => (
            <Card key={work.company}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base print:text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    {work.link ? (
                      <a
                        className="hover:underline"
                        target="_blank"
                        href={work.link}
                      >
                        {work.company}
                      </a>
                    ) : (
                      work.company
                    )}
                    <span className="inline-flex gap-x-1">
                      {work.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500 print:text-sm">
                    {work.start} - {work.end ?? "Present"}
                  </div>
                </div>
                <h4 className="font-mono text-sm leading-none print:text-[12px]">
                  {work.title}
                </h4>
              </CardHeader>
              <CardContent className="mt-1 text-xs print:text-[10.5px] print:leading-snug">
                <ul className="ml-4 list-disc space-y-1">
                  {work.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </Section>

        <Section className="print:break-before-page">
          <h2 className="text-xl font-bold print:text-xl">Skills</h2>
          <div className="space-y-2 print:space-y-1">
            {RESUME_DATA.skills.map((group) => (
              <div key={group.category}>
                <h3 className="mb-1 font-mono text-xs font-semibold">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {group.items.map((skill) => (
                    <Badge className="print:text-[9px]" key={skill}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold print:text-xl">Education</h2>
          {RESUME_DATA.education.map((education) => (
            <Card key={education.school}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base print:text-base">
                  <h3 className="font-semibold leading-none">
                    {education.school}
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500 print:text-[10px]">
                    {education.start} - {education.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2 print:text-[10px]">
                {education.degree}
              </CardContent>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className="text-xl font-bold print:text-xl">
            Training &amp; Certifications
          </h2>
          {RESUME_DATA.certifications.map((certification) => (
            <Card key={certification.title}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base print:text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a
                      className="hover:underline"
                      target="_blank"
                      href={certification.link}
                    >
                      {certification.title}
                    </a>
                    <span className="inline-flex gap-x-1">
                      {certification.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500 print:text-sm">
                    {certification.date}
                  </div>
                </div>
                <h4 className="font-mono text-sm leading-none print:text-[12px]">
                  {certification.organization}
                </h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs print:text-[10px]">
                {certification.description}
              </CardContent>
            </Card>
          ))}
        </Section>

        <Section className="scroll-mb-16 print:break-before-page">
          <h2 className="text-xl font-bold print:text-xl">
            <span className="print:hidden">Projects</span>
            <span className="hidden print:inline">Selected Projects</span>
          </h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={project.link.href}
                source={"source" in project ? project.source : undefined}
                className={
                  index >= SELECTED_PROJECTS.length ? "print:hidden" : undefined
                }
              />
            ))}
          </div>
          <a
            className="hidden font-mono text-xs underline print:inline"
            href={RESUME_DATA.personalWebsiteUrl}
          >
            View all {RESUME_DATA.projects.length} projects at cv.assoli.site
          </a>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
