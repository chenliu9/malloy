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

import { useQuery } from "react-query";
import * as explore from "../../types";
import { API } from "./api";

export const KEY = "models";

async function fetchModels(): Promise<explore.Model[]> {
  const raw = await (await fetch(`${API}/models`)).json();
  return raw.models as explore.Model[];
}

export function useModels(): explore.Model[] | undefined {
  const { data: models } = useQuery(KEY, fetchModels, {
    refetchOnWindowFocus: false,
  });

  return models;
}
