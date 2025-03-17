import React from "react";
import Form from "next/form";
import { Search } from "lucide-react";
import SearchformReset from "./SearchformReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <div>
      <Form action="/" className="search-form" scroll={false}>
        <input
          name="query"
          defaultValue={query}
          className="outline-none"
          placeholder="Search Startups"
        />
        <div className="flex gap-2">
          {query && <SearchformReset />}
          {!query && (
            <button type="submit" className="search-btn text-white">
              <Search className=" size-5" />
            </button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default SearchForm;
