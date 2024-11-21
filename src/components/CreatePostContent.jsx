import { useContext, useRef } from "react";
import Banner from "../assets/banner.jpg";
import { PostList } from "../store/post-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElem = useRef();
  const UsernameElem = useRef();
  const TitleElem = useRef();
  const BodyElem = useRef();
  const ReactionsElem = useRef();
  const TagsElem = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElem.current.value;
    const Username = UsernameElem.current.value;
    const Title = TitleElem.current.value;
    const Body = BodyElem.current.value;
    const Reactions = ReactionsElem.current.value;
    const Tags = TagsElem.current.value.split(" ").filter(Boolean);

    addPost(userId, Username, Title, Body, Reactions, Tags);
  };

  return (
    <div className="flex-col w-full items-center justify-center px-12 my-7">
      <h1 className="text-4xl text-center mb-4 font-medium">Create Post</h1>
      <div className="flex bg-neutral   rounded-lg  text-neutral-content w-full">
        <div className="left w-full flex items-center ">
          <form
            className=" flex flex-col w-full  gap-2 p-5"
            onSubmit={handleSubmit}
          >
            <label className="input input-bordered text-primary  flex items-center gap-2">
              User Id :
              <input
                type="text"
                ref={userIdElem}
                className="grow text-neutral-content"
                placeholder="Enter your unique User ID"
              />
            </label>
            <label className="input input-bordered text-primary  flex items-center gap-2">
              Username :
              <input
                ref={UsernameElem}
                type="text"
                className="grow text-neutral-content"
                placeholder="Enter your Name"
              />
            </label>
            <label className="input input-bordered text-primary  flex items-center gap-2">
              Title :
              <input
                type="text"
                ref={TitleElem}
                className="grow text-neutral-content"
                placeholder="Enter the title of your post"
              />
            </label>
            <textarea
              rows={3}
              ref={BodyElem}
              placeholder="Write your content here"
              className="textarea textarea-bordered  text-base textarea-md w-full min-h-24 max-h-28"
            ></textarea>
            <label className="input input-bordered  text-primary  flex items-center gap-2">
              Reviews :
              <input
                type="text"
                ref={ReactionsElem}
                className="grow text-neutral-content"
                placeholder="Enter reviews or ratings (optional)"
              />
            </label>
            <label className="input input-bordered text-primary  flex items-center gap-2">
              Tags :
              <input
                type="text"
                ref={TagsElem}
                className="grow text-neutral-content"
                placeholder="Enter relevant tags (separate by spaces)"
              />
            </label>
            <button className="btn  btn-primary text-base btn-outline  mt-3">
              Post
            </button>
          </form>
        </div>
        <div className="right   hidden lg:flex w-full     my-[20px] mr-4 ">
          <div className=" w-full  rounded-xl h-full  overflow-hidden brightness-75 ">
            <img src={Banner} alt="" className=" w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
