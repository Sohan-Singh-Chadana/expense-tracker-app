import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useFilter(datalist, callback) {
  const [query, setQuery] = useLocalStorage("query", "");

  const filteredData = datalist.filter((data) =>
    callback(data).toLowerCase().includes(query.toLowerCase())
  );

  return [filteredData, setQuery];
}
