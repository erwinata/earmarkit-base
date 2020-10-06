import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

interface RouteParams {
  query?: string;
}

const Search: React.FC<any> = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const { query } = useParams<RouteParams>();
  useEffect(() => {
    if (query) {
      setSearchQuery(query);
    }
  }, [query]);

  return (
    <div>
      <div className="flex flex-col items-center py-20">
        <h1 className="text-3xl font-bold">Search Results for {searchQuery}</h1>
        <h2 className="text-xl font-semibold"></h2>
      </div>
    </div>
  );
};

export default Search;
