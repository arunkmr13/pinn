import PinnCard from "../components/shared/PinnCard";
import { useFeedStore } from "../store/feedStore.js";

function Feed() {
  const posts = useFeedStore((state) => state.posts);

  return (
    <div className="mx-auto flex w-full max-w-[640px] flex-col gap-4 px-4 py-4 md:px-6 md:py-6">

      <div className="mb-2">
        <h1 className="text-xl font-medium text-[var(--text-primary)]">
          The Board
        </h1>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Verified real-world updates from nearby people.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-3">
          <span className="text-4xl">📍</span>
          <p className="text-sm font-medium text-[var(--text-primary)]">
            No pinns yet
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Be the first to pinn something real.
          </p>
        </div>
      ) : (
        posts.map((post) => (
          <PinnCard key={post.id} post={post} />
        ))
      )}

    </div>
  );
}

export default Feed;