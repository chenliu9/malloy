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
import { Renderer } from "../renderer";
import { createErrorElement, createNullElement } from "./utils";

export class HTMLImageRenderer implements Renderer {
  constructor(private readonly document: Document) {}

  async render(data: DataColumn): Promise<HTMLElement> {
    if (!data.isString()) {
      return createErrorElement(
        this.document,
        "Invalid field for Image renderer"
      );
    }

    if (data.isNull()) {
      return createNullElement(this.document);
    }

    const element = this.document.createElement("img");
    element.src = data.value;
    return element;
  }
}
