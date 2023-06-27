import { PortableTextBlock } from "sanity";

export type Post = {
    _id: string;
    publishedAt: Date;
    title: string;
    slug: string;
    body: PortableTextBlock[];
    alt: string;
    author: string[];
    categories: string[];
    image: string;
}