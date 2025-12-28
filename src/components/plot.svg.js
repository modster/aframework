import { readFile } from "node:fs/promises";
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import { JSDOM } from "jsdom";

const penguins = d3.csvParse(await readFile("/data.penguins.csv", "utf-8"), d3.autoType);

const plot = Plot.plot({
    document: new JSDOM("").window.document,
    marks: [
        Plot.dot(penguins, { x: "culmen_length_mm", y: "culmen_depth_mm", stroke: "species" })
    ]
});

plot.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", "http://www.w3.org/2000/svg");
plot.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

process.stdout.write(plot.outerHTML);