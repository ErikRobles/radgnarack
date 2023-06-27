import Link from "next/link";
import { getPosts } from "../../sanity/sanity.utils";

const BlogList = async () => {
  const posts = await getPosts();
  return (
    <div className="custom-container pb-12 flex md:flex-row flex-col gap-10">
      {posts.map((post) => (
        <a href={`/posts/${post.slug.current}`} key={post._id}>
          <div className="card shadow-xl p-3 max-w-[400px] border-solid border-2 rounded-lg boder-[#c0c0c0]">
            <h2 className="text-center mb-5 text-xl font-bold">{post.title}</h2>
            <img
              src={post.image}
              alt={post.alt}
              className="h-auto w-[280px] max-w-lg rounded-lg text-center mx-auto hover:scale-105 transition"
            />
            <div className="excerpt px-6 py-6 text-justify">
              <p className="mb-8">{post.excerpt && post.excerpt} <span className="text-[#8d6a02]"> Read More...</span></p>
              <hr />
              <p className="mt-8"><span className="font-bold text-[#8d6a02]">Categories</span>:{" "} 
                {post.categories &&
                  post.categories.map((cat) => {
                    if (typeof cat === "string") {
                      return null; // or handle the string case accordingly
                    }
                    return (
                      <span
                        key={cat._id}
                        className="mr-3 px-2 py-1 rounded-xl bg-[#ffc000]"
                      >
                        {cat.title}
                      </span>
                    );
                  })} 
              </p>
              <p className="mt-3"><span className="font-bold text-[#8d6a02]">Published:</span> {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}</p>
                <p className="mt-3"><span className="font-bold text-[#8d6a02]">Author:</span> {post.author}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default BlogList;
