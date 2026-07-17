export default function AboutHeroVideo() {
  return (
    <div className="absolute inset-0 z-0">
      <video
        src="/background-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
    </div>
  );
}
