import React from "react";
import StarBackground from "../StarBackground";

export default function ParallaxHeader({ children, backgroundSrc = "" }) {
  const backgroundRef = React.useRef();
  const starRef = React.useRef();

  React.useEffect(() => {
    const onScroll = () => {
      if (backgroundRef.current && starRef.current) {
        backgroundRef.current.style.backgroundPositionY = `${
          window.scrollY * 0.5
        }px`;
        starRef.current.style.transform = `translateY(${
          window.scrollY * 0.5
        }px)`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        ref={backgroundRef}
        style={{
          backgroundImage: `url(${backgroundSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div ref={starRef} className="absolute inset-0">
        <StarBackground count={333} />
      </div>
      <header className="relative h-full w-full">{children}</header>
    </div>
  );
}
