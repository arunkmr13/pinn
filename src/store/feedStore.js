import { create } from "zustand";
import mockPosts from "../data/mockPosts.js";

export const useFeedStore = create((set) => ({
  posts: mockPosts,

  addPost: (newPost) =>
    set((state) => ({
      posts: [newPost, ...state.posts],
    })),

  getPostById: (id) => {
    return mockPosts.find((post) => post.id === id);
  },
}));