import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { RiSettings6Line } from "react-icons/ri";
import { VscReactions } from "react-icons/vsc";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card bg-neutral    overflow-hidden relative text-neutral-content w-96">
      <div className="dropdown ">
        <div
          tabIndex={0}
          role="button"
          className="   absolute  top-[6px] right-[6px] z-10 cursor-pointer  "
        >
          <RiSettings6Line className=" size-5 fill-info-content" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content absolute top-[24px] right-[24px] menu bg-base-100  rounded-tr-md  rounded-box  z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => deletePost(post.id)}>
            <a>Hide form me</a>
          </li>
          <li>
            <a>Report</a>
          </li>
        </ul>
      </div>

      <div className=" overlay absolute  h-28 w-11  -rotate-45   bg-info -top-14 -right-0"></div>

      <div className="card-body flex flex-col justify-between">
        <div className=" flex w-full  items-center justify-between">
          <div className="avatar  gap-x-2 items-center flex">
            <div className="  p-2  bg-primary  rounded-full">
              <FaUser className=" fill-black" />
            </div>
            <p className=" font-medium text-base ">Unknown {post.userId}</p>
          </div>
          <div className="reactions flex">
            <div className="badge badge-xs cursor-pointer badge-ghost py-3 gap-x-[2px] px-2">
              {post.reactions.likes}
              <VscReactions className=" size-5" />
            </div>
          </div>
        </div>
        <h2 className="card-title">{post.title}</h2>
        <p className="  max-h-28  overflow-x-hidden  py-1    overflow-y-auto">
          {post.body}
        </p>
        <div className="card-actions    justify-end">
          {post.tags.map((tag) => (
            <div key={tag} className="badge badge-outline  py-3">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
