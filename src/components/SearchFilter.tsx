import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DifficultyLevel } from "@/data/patterns";

interface SearchFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: "all" | "reversal" | "continuation";
  onCategoryChange: (value: "all" | "reversal" | "continuation") => void;
  difficulty: "all" | DifficultyLevel;
  onDifficultyChange: (value: "all" | DifficultyLevel) => void;
}

const SearchFilter = ({ search, onSearchChange, category, onCategoryChange, difficulty, onDifficultyChange }: SearchFilterProps) => {
  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search patterns..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={category === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange("all")}
          >
            All
          </Button>
          <Button
            variant={category === "reversal" ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange("reversal")}
          >
            Reversal
          </Button>
          <Button
            variant={category === "continuation" ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange("continuation")}
          >
            Continuation
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm text-muted-foreground">Difficulty:</span>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={difficulty === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => onDifficultyChange("all")}
          >
            All Levels
          </Button>
          <Button
            variant={difficulty === "beginner" ? "default" : "outline"}
            size="sm"
            onClick={() => onDifficultyChange("beginner")}
          >
            Beginner
          </Button>
          <Button
            variant={difficulty === "intermediate" ? "default" : "outline"}
            size="sm"
            onClick={() => onDifficultyChange("intermediate")}
          >
            Intermediate
          </Button>
          <Button
            variant={difficulty === "advanced" ? "default" : "outline"}
            size="sm"
            onClick={() => onDifficultyChange("advanced")}
          >
            Advanced
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
