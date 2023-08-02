import { createClient } from "next-sanity"

export const client = createClient({
  projectId: "g91temd2",
  dataset: "production",
  apiVersion: "2023-06-24",
});
