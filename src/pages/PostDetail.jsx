import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Avatar from "../components/shared/Avatar";
import PinnButton from "../components/shared/PinnButton";
import TrustLayerSheet from "../components/shared/TrustLayerSheet";
import TrustSignalBar from "../components/shared/TrustSignalBar";
import { useFeedStore } from "../store/feedStore.js";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // inline selector — reads live state, re-renders only when this post changes
  const post = useFeedStore((state) =>
    state.posts.find((p) => p.id === id)
  );

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-[var(--text-muted)]">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[720px] px-4 py-4 md:px-6 md:py-6">

      {/* Back button — mobile only */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors md:hidden"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      {/* Post card */}
      <article className="rounded-[8px] border border-[var(--border)] bg-[var(--card)]">
        <div className="flex items-start gap-3 p-4">
          <Avatar initials={post.user.initials} size="lg" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-medium text-[var(--text-primary)]">
                  @{post.user.handle}
                </div>
                <div className="mt-1 text-xs text-[var(--text-muted)]">
                  {post.timestamp}
                </div>
              </div>
              <div className="max-w-[160px] truncate text-xs text-[var(--text-muted)]">
                {post.location}
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--text-primary)]">
              {post.caption}
            </p>
          </div>
        </div>

        {/* Image — guard against missing or broken */}
        {post.image && (
          <div className="border-y border-[var(--border)] bg-[var(--surface)]">
            <img
              src={post.image}
              alt={post.caption}
              className="h-[420px] w-full object-cover"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        )}

        <div className="p-4">
          <TrustSignalBar layers={post.layers} />
        </div>
      </article>

      {/* Signal threads breakdown */}
      <TrustLayerSheet trustLayers={post.trustLayers} />

      {/* Actions */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {/* TODO: wire to holdPost action in feedStore */}
        <PinnButton variant="secondary" onClick={() => {}}>
          Hold
        </PinnButton>
        {/* TODO: wire to flagPost action in feedStore */}
        <PinnButton variant="secondary" onClick={() => {}}>
          Flag
        </PinnButton>
        {/* TODO: implement share via Web Share API */}
        <PinnButton onClick={() => {}}>
          Share
        </PinnButton>
      </div>

    </div>
  );
}

export default PostDetail;