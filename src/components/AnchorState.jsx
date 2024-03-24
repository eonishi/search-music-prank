import usePlayerStore from "../store/usePlayerStore.ts";

export default function AnchorState(props) {
  const { isPlaying, setIsPlaying, setCurrentSong } = usePlayerStore(
    (state) => state
  );
  const imThisSong = {
    tittle: props.children,
    artists: props.artists,
    cover: props.cover,
  };

  const handleClick = () => {
    setCurrentSong(imThisSong);
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <a onClick={handleClick}>
        <h2 className="text-2xl text-gray-300 hover:cursor-pointer
        relative after:absolute after:bottom-0 
        after:left-0 after:right-0 after:h-[2px] after:w-full 
        after:origin-bottom after:scale-x-0 after:bg-gray-300 
        after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
          {props.children}
        </h2>
      </a>
    </>
  );
}

