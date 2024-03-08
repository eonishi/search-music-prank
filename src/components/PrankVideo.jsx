import "./PrankVideo.css";
import usePlayerStore from "../store/usePlayerStore.ts";
import { useEffect, useRef, useState } from "react";

export default function PrankVideo() {
  const { firstUpdate, setFirstUpdate } = useState(true);
  const { isPlaying } = usePlayerStore((state) => state);
  const videoRef = useRef();

  useEffect(() => {
    isPlaying ? videoRef.current.play() : videoRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    isPlaying
      ? videoRef.current.classList.remove("fadeOut")
      : videoRef.current.classList.remove("fadeIn");
  }, [isPlaying]);

  
  if (firstUpdate) {
    setFirstUpdate(false);
  } else {
    useEffect(() => {
      isPlaying
        ? videoRef.current.classList.add("fadeIn")
        : videoRef.current.classList.add("fadeOut");
  }, [isPlaying]);
  }


  return (
    <>
      <video
        ref={videoRef}
        src="/Gandalf.mp4"
        id="bg-video"
        className="bg-repeat-round group-active:animation"
      ></video>
    </>
  );
}
