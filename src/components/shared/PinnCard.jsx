import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import TrustSignalBar from "./TrustSignalBar";

function PinnCard({ post }) {
  const verifiedCount = post.layers.filter(Boolean).length;

  return (
    <Link to={`/post/${post.id}`}>
      <article className="rounded-[8px] border border-[var(--border)] bg-[var(--card)] transition-colors hover:bg-[var(--surface)]">

        {/* Header — avatar, handle, timestamp, location */}
        <div className="flex items-start gap-3 p-4">
          <Avatar initials={post.user.initials} />
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
              {/* truncate long location names on small screens */}
              <div className="max-w-[120px] truncate text-xs text-[var(--text-muted)]">
                {post.location}
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--text-primary)]">
              {post.caption}
            </p>
          </div>
        </div>

        {/* Image — only renders if present, hides on load error */}
        {post.image && (
          <div className="border-y border-[var(--border)] bg-[var(--surface)]">
            <img
              src={post.image}
              alt={post.caption}
              className="h-[320px] w-full object-cover"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        )}

        {/* Footer — signal bar + verified count */}
        <div className="flex items-center justify-between p-4">
          <TrustSignalBar layers={post.layers} />
          <span className="text-xs text-[var(--text-muted)]">
            {verifiedCount}/5 verified
          </span>
        </div>

      </article>
    </Link>
  );
}

export default PinnCard;