import { useParams } from "react-router-dom";
import Avatar from "../components/shared/Avatar";
import PinnButton from "../components/shared/PinnButton";
import TrustLayerSheet from "../components/shared/TrustLayerSheet";
import TrustSignalBar from "../components/shared/TrustSignalBar";
import { useFeedStore } from "../store/feedStore.js";

function PostDetail() {
  const { id } = useParams();

  const getPostById = useFeedStore((state) => state.getPostById);

  const post = getPostById(id);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-[var(--text-muted)]">
          Post not found.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[720px] px-4 py-4 md:px-6 md:py-6">
      <article className="rounded-[8px] border border-[var(--border)] bg-[var(--card)]">
        <div className="flex items-start gap-3 p-4">
          <Avatar initials={post.user.initials} size="lg" />

          <div className="flex-1">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-medium text-[var(--text-primary)]">
                  @{post.user.handle}
                </div>

                <div className="mt-1 text-xs text-[var(--text-muted)]">
                  {post.timestamp}
                </div>
              </div>

              <div className="text-xs text-[var(--text-muted)]">
                {post.location}
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-[var(--text-primary)]">
              {post.caption}
            </p>
          </div>
        </div>

        <div className="border-y border-[var(--border)] bg-[var(--surface)]">
          <img
            src={post.image}
            alt={post.caption}
            className="h-[420px] w-full object-cover"
          />
        </div>

        <div className="p-4">
          <TrustSignalBar layers={post.layers} />
        </div>
      </article>

      <TrustLayerSheet trustLayers={post.trustLayers} />

      <div className="mt-4 grid grid-cols-3 gap-3">
        <PinnButton variant="secondary">
          Hold
        </PinnButton>

        <PinnButton variant="secondary">
          Flag
        </PinnButton>

        <PinnButton>
          Share
        </PinnButton>
      </div>
    </div>
  );
}

export default PostDetail;