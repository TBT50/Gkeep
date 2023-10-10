import { SearchFilter } from "../SearchFilter/SearchFilter";
import { Settings } from "../Settings/Settings";

export const AppBar = () => {
  return (
    <header className="p-4 border-2 flex gap-4 justify-between">
      <h1 className="font-bold">Gkeep</h1>
      <SearchFilter />
      <Settings />
    </header>
  );
};
