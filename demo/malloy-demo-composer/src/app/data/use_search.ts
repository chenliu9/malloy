/*
 * Copyright 2021 Google LLC
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 */

import { StructDef } from "@malloydata/malloy";
import { SearchIndexResult } from "@malloydata/malloy";
import { useQuery } from "react-query";
import { API } from "./api";

async function search(
  source: StructDef | undefined,
  searchTerm: string,
  fieldPath?: string
) {
  if (source === undefined) {
    return undefined;
  }
  const raw = await (
    await fetch(`${API}/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchTerm, source, fieldPath }),
    })
  ).json();
  return (raw.result || []) as SearchIndexResult[];
}

interface UseSearchResult {
  searchResults: SearchIndexResult[] | undefined;
  isLoading: boolean;
}

export function useSearch(
  source: StructDef | undefined,
  searchTerm: string,
  fieldPath?: string
): UseSearchResult {
  const { data: searchResults, isLoading } = useQuery(
    [source, searchTerm, fieldPath],
    () => search(source, searchTerm, fieldPath),
    {
      refetchOnWindowFocus: true,
    }
  );

  return { searchResults, isLoading };
}
