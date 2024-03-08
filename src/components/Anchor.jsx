import { useIsPlaying } from "../store/usePlayerStore.ts";

export default function Anchor(props) {
  const { isPlaying, setIsPlaying } = useIsPlaying((state) => state);
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <a onClick={handleClick}>
        <h2 className="text-2xl text-gray-300 hover:underline hover:cursor-pointer">
          {props.children}
        </h2>
      </a>
    </>
  );
}
