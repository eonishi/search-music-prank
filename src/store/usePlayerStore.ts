import { create } from "zustand";

interface Song {
    tittle: string;
    artist: string;
    cover: string;
}

const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentSong: null as Song | null,
    setIsPlaying: (isPlaying: Boolean) => set({ isPlaying }),
    setCurrentSong: (currentSong: Song) => set({ currentSong }),
}));

export default usePlayerStore;