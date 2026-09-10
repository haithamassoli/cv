import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  source?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  source,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border border-muted p-3 print:p-2",
        className,
      )}
    >
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
              </a>
            ) : (
              title
            )}
          </CardTitle>
          {source && (
            <a
              className="font-mono text-[10px] text-muted-foreground underline print:hidden"
              href={source}
              target="_blank"
            >
              GitHub
            </a>
          )}
          <CardDescription className="font-mono text-xs print:text-[10px] print:leading-tight">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1 print:mt-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px] print:px-1 print:text-[8px] print:leading-tight"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
