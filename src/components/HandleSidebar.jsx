import { CiMenuKebab } from "react-icons/ci";

const HandleSidebar = () => {
  return (
    <div className="drawer-content">
      <label htmlFor="my-drawer" className=" hover:cursor-pointer">
        <div className="   rounded-lg  p-2  btn-ghost ">
          <CiMenuKebab className="size-5" />
        </div>
      </label>
    </div>
  );
};

export default HandleSidebar;
