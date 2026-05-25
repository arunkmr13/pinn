import { create } from "zustand";
import mockPosts from "../data/mockPosts.js";

export const useFeedStore = create((set, get) => ({
  posts: mockPosts,
  loading: false,
  error: null,

  // prepend new post to feed
  addPost: (newPost) =>
    set((state) => ({
      posts: [newPost, ...state.posts],
    })),

  // reads from live state — not stale mockPosts import
  getPostById: (id) =>
    get().posts.find((post) => post.id === id),

  // stub ready for real API — swap comment blocks when backend is live
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      // const res = await axios.get("/api/posts");
      // set({ posts: res.data });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));