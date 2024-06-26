import usePlayerStore from "../store/usePlayerStore.ts";

export const Pause = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Play = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

export default function MediaButtons() {
  const { isPlaying, setIsPlaying, currentSong } = usePlayerStore(
    (state) => state
  );

  const handleClick = () => {
    if (currentSong === null) return;
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <button
        className="play-button bg-white rounded-full p-3 active:scale-90"
        onClick={handleClick}
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </>
  );
}
