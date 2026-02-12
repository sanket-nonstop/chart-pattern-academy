import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBookmarks } from "@/hooks/use-bookmarks";

interface BookmarkButtonProps {
  slug: string;
  variant?: "default" | "ghost";
}

const BookmarkButton = ({ slug, variant = "ghost" }: BookmarkButtonProps) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(slug);

  return (
    <Button
      variant={variant}
      size="icon"
      onClick={(e) => {
        e.preventDefault();
        toggleBookmark(slug);
      }}
      className="h-8 w-8"
    >
      <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current text-primary" : ""}`} />
    </Button>
  );
};

export default BookmarkButton;
