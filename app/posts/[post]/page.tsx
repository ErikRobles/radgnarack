import { getPost } from "../../../sanity/sanity.utils";
import BlockContent from "@sanity/block-content-to-react";

type Props = {
    params: { post: string },
    // post: any
}

export default async function Post({ params }: Props) {
    const slug = params.post;
    const post = await getPost(slug);
    const formattedPublishedAt = new Date(post.publishedAt).toLocaleDateString();
    return (
        <>
            {/* <HeroTwo heading="" message="" /> */}
            <div className="bg-[#222] pb-12">
                <div className="spacer pt-[90px]"></div>
                <div className="custom-container">
                    <div className="blog-post card bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between gap-8">
                        <img
                            src={post.image}
                            alt={post.alt}
                            className="h-auto w-full max-w-lg  rounded-lg text-center mx-auto"
                        />
                        <h2 className="text-2xl text-center">
                            {post.title}
                        </h2>

                        <BlockContent blocks={post.body} projectId={"g91temd2"}
                            dataset={"production"} className="justify block-text" />
                        <div className="blog-info">
                            <p><span className="font-bold text-[#8d6a02]">Author:</span> {post.author}</p>
                            <p><span className="font-bold text-[#8d6a02]">Published:</span>{" "}{new Date(post.publishedAt).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })} </p>
                            <p><span className="font-bold text-[#8d6a02]">Categories:</span>  {post.categories &&
                                post.categories.map((cat: string | {_id : string, title: string}) => {
                                    if(typeof cat === "string") {
                                        return null; // or handle the string case accordingly
                                    }
                                    return <span key={cat._id} className="mr-3 px-2 py-1 rounded-xl bg-[#ffc000]">{cat.title}</span>;
                                })}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

