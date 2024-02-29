import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Slider from "infinite-react-carousel";
export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <Slider className="my-4" dots autoplay={true} arrowsBlock={false}>
        <div className="p-3 bg-amber-100 dark:bg-slate-700">
          <CallToAction
            photo="https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s24-ultra/1536x920.jpg?imbypass=true"
            alt="Samsung Galaxy S24 Ultra"
            heading="Discover the Next Generation Smartphone!"
            text="Explore the revolutionary features of the latest Samsung Galaxy S24 Ultra."
          />
        </div>
        <div className="p-3 bg-amber-100 dark:bg-slate-700">
          <CallToAction
            photo="data:image/jpeg;base64,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"
            alt="Google Pixel 7 Pro"
            heading="Meet the Google Pixel 7 Pro"
            text="Discover the incredible camera capabilities and smooth performance of the Google Pixel 7 Pro."
          />
        </div>
        <div className="p-3 bg-amber-100 dark:bg-slate-700">
          <CallToAction
            photo="https://os-wordpress-media.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2021/12/21130812/OnePlus-10-Pro-Green-OnSiteGo.jpeg"
            alt="OnePlus 10 Pro"
            heading="Unleash the Power of the OnePlus 10 Pro"
            text="Experience lightning-fast performance and immersive display of the OnePlus 10 Pro."
          />
        </div>
        <div className="p-3 bg-amber-100 dark:bg-slate-700">
          <CallToAction
            photo="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/7/l/8/-original-imagqmtfgq7e4edm.jpeg?q=70&crop=false"
            alt="Samsung Galaxy S24 Ultra"
            heading="Xiaomi 12 pro 5G!"
            text="Explore the revolutionary features of the latest Samsung Galaxy S24 Ultra."
          />
        </div>
      </Slider>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
