export default function Hero() {
  return (
    <div className="relative w-full">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background - Desktop (16:9) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
          poster="/cover.png"
        >
          <source src="/cooking-hero.mp4" type="video/mp4" />
          {/* <source src="/hero-video-desktop.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>

        {/* Video Background - Mobile (9:16) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover md:hidden"
          poster="mobile-cover.png"
        >
          <source src="/mobile-cooking-hero.mp4" type="video/mp4" />
          {/* <source src="/hero-video-mobile.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

        {/* Hero Content - Logo and Tagline */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <div className="flex flex-col items-center">
            <img 
              src="/abu-zayn-transparent.png" 
              alt="Abu Zayn Logo" 
              className="w-64 md:w-96 h-auto mb-6 drop-shadow-2xl"
            />
            
            {/* Separator Line */}
            <div className="w-16 h-px bg-white/70 mb-5" />
            
            {/* Tagline with Background */}
            <div className="px-3 py-2 bg-black/40 backdrop-blur-xl border border-white/20 rounded-xl">
              <h2 className="text-xs md:text-sm font-medium tracking-[0.25em] text-center uppercase text-white">
                Classic Egyptian Excellence
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}