import PinnButton from "../components/shared/PinnButton";

function Compose() {
  return (
    <div className="mx-auto w-full max-w-[640px] px-4 py-4 md:px-6 md:py-6">
      <div className="rounded-[8px] border border-[var(--border)] bg-[var(--card)]">
        <div className="border-b border-[var(--border)] px-4 py-4">
          <h1 className="text-lg font-medium text-[var(--text-primary)]">
            Create Pinn
          </h1>

          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Share a verified real-world update.
          </p>
        </div>

        <form className="flex flex-col gap-4 p-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
              Caption
            </label>

            <textarea
              rows={5}
              placeholder="What’s happening nearby?"
              className="w-full rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
              Location
            </label>

            <input
              type="text"
              placeholder="Add location"
              className="w-full rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
              Upload photo
            </label>

            <div className="rounded-[8px] border border-dashed border-[var(--border)] bg-[var(--surface)] px-4 py-10 text-center text-sm text-[var(--text-muted)]">
              Drag & drop or select a verified image
            </div>
          </div>

          <div className="pt-2">
            <PinnButton fullWidth>
              Publish Pinn
            </PinnButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Compose;