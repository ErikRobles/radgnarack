import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";
import { visionTool } from "@sanity/vision";


const config = defineConfig({
    projectId: "g91temd2",
    dataset: "production",
    title: "Radgnarack",
    apiVersion: "2023-06-24",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: {
        types: schemaTypes,
      },
});

export default config;