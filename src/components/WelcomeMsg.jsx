import { useContext, useState } from "react";
import { FiAlertOctagon } from "react-icons/fi";
import { PostList } from "../store/post-list-store";

const WelcomeMsg = () => {
  const { postList, addIniPosts } = useContext(PostList);
  const [clicked, setClicked] = useState(false);

  const handleFetchReq = () => {
    setClicked(true);
    fetch("//dummyjson.com/post")
      .then((res) => res.json())
      .then((data) => {
        addIniPosts(data.posts);
      });
  };

  return (
    <div className=" h-80  bg-neutral rounded-md shadow-md  flex items-center justify-center text-neutral-content ">
      <div className="text-center text-lg flex flex-col  items-center  gap-3    font-medium mt-5  ">
        <p>No posts are available at the moment. Please check back later.</p>
        <button onClick={handleFetchReq} className="btn btn-wide ">
          {clicked ? (
            <span className="loading  loading-spinner"></span>
          ) : (
            <span>Fetch New Posts</span>
          )}
        </button>
        <p className="    w-[30rem] opacity-90  font-normal text-base  ">
          There are no posts available at the moment. Click the button above to
          load new posts.
        </p>
      </div>
    </div>
  );
};

export default WelcomeMsg;
