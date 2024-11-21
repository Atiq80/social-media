import { useContext } from "react";
import Post from "./Post";
import { PostList } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";

const HomeContent = () => {
  const { postList } = useContext(PostList);
  return (
    <>
      <h1 className="  px-5 pt-5 pb-3 text-2xl font-semibold  ">
        Recently Added Posts
      </h1>
      {postList.length === 0 ? <WelcomeMsg /> : null}
      <div className="  w-full  flex  flex-wrap gap-3 mb-5  justify-center  py-2 ">
        
         {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))} 
      </div>
    </>
  );
};

export default HomeContent;
