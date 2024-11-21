import { CgMediaLive } from "react-icons/cg";
import HomeContent from "./HomeContent";
import Navbar from "./navbar";
import Footer from "./Footer";
import CreatePost from "./CreatePostContent";
import { useState } from "react";

const Drawer = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === "Home" ? (
          <HomeContent />
        ) : selectedTab === "Create Post" ? (
          <CreatePost />
        ) : null}

        <Footer />
      </div>
      <div className="drawer-side  ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <ul className="menu bg-base-200 backdrop-blur-md text-base-content min-h-full w-80 p-4">
          <div className="w-full  mb-4">
            <a className="btn w-full  btn-ghost text-xl">
              <span>
                <CgMediaLive />
              </span>
              Buzzly
            </a>
          </div>
          <li onClick={() => setSelectedTab("Home")}>
            <a className={`${selectedTab === "Home" && " btn-active "}`}>
              Home
            </a>
          </li>
          <li onClick={() => setSelectedTab("Create Post")}>
            <a className={`${selectedTab === "Create Post" && " btn-active"}`}>
              Create Post
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
