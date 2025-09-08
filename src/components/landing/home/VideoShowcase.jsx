"use client";
import { useRef, useEffect } from "react";

const videos = [
  {
    id: 1,
    src: "/videos/flower.mp4",
    title: "Handpicking Fresh Roses",
  },
  {
    id: 2,
    src: "/videos/flower.mp4",
    title: "Arranging Bouquets",
  },
  {
    id: 3,
    src: "/videos/flower.mp4",
    title: "Luxury Wrapping Process",
  },
];

export default function VideoShowcase() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const videos = container.querySelectorAll("video");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videos.forEach((video) => observer.observe(video));

    return () => {
      videos.forEach((video) => observer.unobserve(video));
    };
  }, []);

  return (
    <section className="h-screen w-full bg-gradient-to-b  from-pink-50 to-purple-100 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
        How We Create Our Flowers
      </h2>

      <div
        ref={containerRef}
        className="h-[80vh] w-full max-w-3xl overflow-y-scroll snap-y snap-mandatory rounded-2xl shadow-2xl scrollbar-hide"
      >
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative h-[80vh] w-full snap-start flex items-center justify-center"
          >
            <video
              src={video.src}
              muted
              loop
              playsInline
              className="h-full w-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-6 left-6 bg-black/50 text-white px-4 py-2 rounded-lg text-lg shadow-lg">
              {video.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
