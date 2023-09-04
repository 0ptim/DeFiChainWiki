import React from "react";

export default function ParallaxHeader({ children, backgroundSrc = "" }) {
  const ref = React.useRef();

  React.useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        ref.current.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="relative flex h-[80vh] items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundSrc})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      ref={ref}
    >
      <header className="relative h-full w-full bg-transparent">
        {children}
      </header>
    </div>
  );
}
