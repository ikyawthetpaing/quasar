import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SearchPostForm } from "@/components/form/search-post-form";
import { Icons } from "@/components/icons";

export function SearchPostDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <Icons.search className="size-7" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <SearchPostForm className="h-10 max-w-full" autoFocus />
      </DialogContent>
    </Dialog>
  );
}
