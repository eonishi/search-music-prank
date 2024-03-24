import usePlayerStore from "../store/usePlayerStore.ts";

export default function PlayerInfo() {
  const { currentSong } = usePlayerStore((state) => state);
    if (currentSong != null) {
    const { tittle, cover, artists } = currentSong;
    return (
      <>
        <div className="flex items-center space-x-4 text-white w-full">
          <img src={cover} alt={`Portada del tema ${tittle}`} className="w-14 h-14 rounded-xl" />
          <div className="flex flex-col">
            <p className="text-lg font-bold">{tittle}</p>
            <p className="text-base">{artists}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center space-x-4 w-full"></div>
    </>
  );
}
