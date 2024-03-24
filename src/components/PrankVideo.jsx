import "./PrankVideo.css";
import usePlayerStore from "../store/usePlayerStore.ts";
import { lazy, useEffect, useRef} from "react";

export default function PrankVideo() {
  const { isPlaying, volume } = usePlayerStore((state) => state);
  const videoRef = useRef();
  const audioRef = useRef();
  const firstUpdate = useRef(true);

  useEffect(() => {
    isPlaying ? videoRef.current.play() : videoRef.current.pause();
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    isPlaying
      ? videoRef.current.classList.remove("fadeOut")
      : videoRef.current.classList.remove("fadeIn");
  }, [isPlaying]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      isPlaying
        ? videoRef.current.classList.add("fadeIn")
        : videoRef.current.classList.add("fadeOut");
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay={false}
        src="/Gandalf.mp4"
        id="bg-video"
        className="bg-repeat-round group-active:animation"
        muted={true}
      ></video>

      <audio
        src="/audio.mp3"
        ref={audioRef}
      ></audio>
    </>
  );
}
