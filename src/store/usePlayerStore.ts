import { create } from "zustand";

interface Song {
    tittle: string;
    artists: string;
    cover: string;
}

const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentSong: null as Song | null,
    volume: 1,
    setIsPlaying: (isPlaying: Boolean) => set({ isPlaying }),
    setCurrentSong: (currentSong: Song) => set({ currentSong }),
    setVolume: (volume: number) => set({ volume }),
}));

export default usePlayerStore;