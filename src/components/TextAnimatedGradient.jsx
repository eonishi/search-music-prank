const TextAnimatedGradient = (props) => {
  return (
    <span
      className="inline-flex justify-center animate-text-gradient 
      bg-gradient-to-r from-[#bae6fd] via-[#f0f9ff] to-[#bae6fd] bg-[200%_auto] bg-clip-text
      text-4xl text-transparent font-semibold "
    >
      {props.children}
    </span>
  );
};

export default TextAnimatedGradient;
