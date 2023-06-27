import { createClient, groq } from "next-sanity";
import { Post } from "../types/Post";


export async function getPosts(): Promise<Post[]> {
    const client = createClient({
        projectId: "g91temd2",
        dataset: "production",
        apiVersion: "2023-06-24",
    });

    return client.fetch(
        groq `
        *[_type == "post"] {
            _id,
            publishedAt,
            title,
            slug,
            body,
            excerpt,
            alt,
            "author": author->name,
            "categories": categories[]->
            {
                _id,
                title
            },
            "image": image.asset->url
        }
        `
    );
}

export async function getPost(slug: String): Promise<Post>{
    const client = createClient({
        projectId: "g91temd2",
        dataset: "production",
        apiVersion: "2023-06-24",
    });

    return client.fetch(
        groq `
        *[_type == "post" && slug.current == $slug][0] {
            _id,
            publishedAt,
            title,
            slug,
            body,
            alt,
            "author": author->name,
            "categories": categories[]->
            {
                _id,
                title
            },
            "image": image.asset->url
        }
        `,
        {slug}
    );
}