import Link from "next/link";
import { getPosts } from "../../sanity/sanity.utils";
import BlockContent from "@sanity/block-content-to-react";


// Create a serializer that helps the user open a url in a new tab when a link is clicked
const serializers = {
  marks: {
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noopener">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};


const EventsList = async () => {
  const posts = await getPosts();
  const events = posts.filter((post) =>
    post.categories.some((cat) => cat.title === "events")
  );

  return (
    <div className="text-center m-auto pb-12 flex flex-col gap-10">
      {events.map((post) => (
        // <Link href={`/posts/${post.slug.current}`} key={post._id}>
          <div key={post._id} className="card shadow-xl p-3 max-w-[400px] border-solid border-2 rounded-lg boder-[#c0c0c0]">
          <h2 className="text-center mb-5 text-xl font-bold">{post.title}</h2>
            <img
              src={post.image}
              alt={post.alt}
              className="h-auto max-w-[100%] rounded-lg text-center mx-auto hover:scale-105 transition"
            />
            <div className="px-6 py-6 text-justify event-text" id="event">
              <BlockContent blocks={post.body} projectId={"g91temd2"}
                            dataset={"production"} serializers={serializers}
                            className="justify block-text" />
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
                {/* <p className="mt-3"><span className="font-bold text-[#8d6a02]">Author:</span> {post.author}</p> */}
            </div>
          </div>
        // </Link>
      ))}
    </div>
  );
};

export default EventsList;