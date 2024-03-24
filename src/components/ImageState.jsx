import usePlayerStore from "../store/usePlayerStore.ts";

export default function ImageState({cover, tittle, artists}) {
    const { isPlaying, setIsPlaying, setCurrentSong } = usePlayerStore((state) => state);
    const imThisSong = {
        tittle: tittle,
        artists: artists,
        cover: cover,
      };
    
      const handleClick = () => {
        setCurrentSong(imThisSong);
        setIsPlaying(!isPlaying);
      };

    return (
    <>
        <img
            onClick={handleClick}
            className="play-button w-[50px] h-auto rounded-lg aspect-square 
                    hover:cursor-pointer hover:saturate-200 hover:scale-105 active:scale-95"
            src= {cover}
            alt={`Cover of ${tittle}`}
        />
    </>
    )

}

