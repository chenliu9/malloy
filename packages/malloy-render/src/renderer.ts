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

import { DataColumn } from "@chenliu9/malloy";

export type ChildRenderers = { [fieldName: string]: Renderer };

export interface Renderer {
  render(value: DataColumn): Promise<HTMLElement>;
}

export abstract class RenderTree implements Renderer {
  constructor(
    protected readonly document: Document,
    protected readonly options: {
      isDrillingEnabled?: boolean;
      onDrill?: (drillQuery: string, target: HTMLElement) => void;
    }
  ) {}

  protected abstract get childRenderers(): ChildRenderers;

  abstract render(value: DataColumn): Promise<HTMLElement>;
}
