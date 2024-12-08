'use client'

import { Button } from "@/components/ui/button"
import YouTube from 'react-youtube'

export default function LandingPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* YouTube Background Video */}
      <div className="absolute inset-0 -z-10">
        <YouTube
          videoId="MxXmxW8MTzc" // Replace with your YouTube video ID
          opts={{
            height: '100%',
            width: '100%',
            playerVars: {
              autoplay: 1,
              loop: 1,
              mute: 1,
              controls: 0,
              rel: 0,
              playsinline: 1,
              modestbranding: 1,
              showinfo: 0,
              fs: 0,
              enablejsapi: 1,
            },
          }}
          className="absolute top-0 left-0 w-full h-full object-cover"
          onEnd={(event) => event.target.playVideo()}
          onReady={(event) => event.target.playVideo()}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-12">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#E6C7A9] mb-4">
          Dr. Mojo
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white mb-4">
          Your AI Radiologist
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
          Providing a fast and detailed analysis of your medical images
        </p>
        <Button 
          variant="outline" 
          size="lg"
          className="text-white border-white hover:bg-white/20 bg-transparent text-lg transition-colors duration-300"
        >
          Learn More
        </Button>
      </div>
    </main>
  )
}

