import { Badge } from "@/components/ui/badge";
export function TechnologyBadge({ tag }) {
  return (
    <div className="flex flex-row items-center gap-2">
      <Badge variant="outline" className="text-xs">
        {tag.name}
      </Badge>
    </div>
  );
}
