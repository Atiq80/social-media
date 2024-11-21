import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addIniPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INI_POSTS") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, username, title, Body, reactions, tags) => {
    const postID = uuidv4();
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: postID,
        Username: username,
        title: title,
        body: Body,
        reactions: reactions,
        UserId: userId,
        Tags: tags,
      },
    });
  };
  const addIniPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INI_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, addIniPosts }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    Username: "john_doe",
    title: "Exploring the Future of AI",
    body: "Artificial Intelligence is changing the way we live and work. In this post, we explore its future and impact on various industries.",
    reactions: 125,
    UserId: "101",
    Tags: ["AI", "Technology", "Future"],
  },
  {
    id: "2",
    Username: "jane_smith",
    title: "10 Tips for Effective Social Media Marketing",
    body: "Looking to improve your social media game? Here are 10 tips that will help you boost engagement and grow your brand online.",
    reactions: 200,
    UserId: "102",
    Tags: ["Marketing", "Social Media", "Growth"],
  },
  {
    id: "3",
    Username: "tech_guru",
    title: "Top 5 Programming Languages to Learn in 2024",
    body: "If you're planning to start a career in software development, these 5 programming languages should be at the top of your list.",
    reactions: 175,
    UserId: "103",
    Tags: ["Programming", "Tech", "Languages"],
  },
  {
    id: "4",
    Username: "alice_wonder",
    title: "The Rise of Remote Work: Challenges and Opportunities",
    body: "Remote work has become the new normal. This post discusses the challenges that come with it and the opportunities it presents for both employers and employees.",
    reactions: 90,
    UserId: "104",
    Tags: ["Remote Work", "Workplace", "Productivity"],
  },
  {
    id: "5",
    Username: "mark_taylor",
    title: "How to Build a Personal Brand on Instagram",
    body: "Instagram is one of the most powerful platforms to build a personal brand. In this post, I share my journey and tips for success.",
    reactions: 250,
    UserId: "105",
    Tags: ["Instagram", "Personal Brand", "Marketing"],
  },
  {
    id: "6",
    Username: "emma_jones",
    title: "Sustainable Fashion: Trends to Watch in 2024",
    body: "Sustainability is becoming a major focus in the fashion industry. Here are the key trends in sustainable fashion that you should keep an eye on.",
    reactions: 110,
    UserId: "106",
    Tags: ["Fashion", "Sustainability", "Trends"],
  },
  {
    id: "7",
    Username: "david_lee",
    title: "The Ultimate Guide to Digital Transformation",
    body: "Digital transformation is essential for businesses looking to stay competitive. This guide will walk you through the steps to successfully implement digital transformation in your organization.",
    reactions: 180,
    UserId: "107",
    Tags: ["Business", "Digital Transformation", "Tech"],
  },
  {
    id: "8",
    Username: "lily_rose",
    title: "Exploring the World of Cryptocurrency",
    body: "Cryptocurrency is revolutionizing the financial world. This post dives deep into the world of digital currencies and their future potential.",
    reactions: 220,
    UserId: "108",
    Tags: ["Cryptocurrency", "Finance", "Blockchain"],
  },
];

export default PostListProvider;
