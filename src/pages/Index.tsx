
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/40 to-secondary/40">
      <audio
        ref={audioRef}
        src="https://example.com/your-romantic-song.mp3"
        loop
      />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="fade-in text-4xl md:text-6xl font-bold mb-6 text-gray-800">
          For My Beloved
        </h1>
        <p className="slide-up text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Every moment with you feels like a beautiful dream come true. Your smile lights up my world,
          and your love makes every day extraordinary. This is my way of showing you how much you mean to me.
        </p>
      </div>

      {/* Photo Grid */}
      <div className="photo-grid">
        <div className="photo-card">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Special moment 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="photo-card">
          <img
            src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
            alt="Special moment 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="photo-card">
          <img
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
            alt="Special moment 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Love Message */}
      <div className="container mx-auto px-4 py-20">
        <div className="glass-card p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            My Dearest Love
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            From the moment our paths crossed, I knew my life would never be the same.
            Your love has given me wings to fly and a home to return to.
            Every smile, every laugh, every tender moment we share becomes a precious memory
            I treasure in my heart. You are my inspiration, my comfort, and my greatest adventure.
            Thank you for being you, and for choosing to share your life with me.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mt-4 font-semibold">
            Forever yours,
            <br />
            [Your Name]
          </p>
        </div>
      </div>

      {/* Music Player */}
      <div className="music-player">
        <button onClick={togglePlay} className="music-controls">
          {isPlaying ? (
            <Pause className="w-6 h-6 text-gray-800" />
          ) : (
            <Play className="w-6 h-6 text-gray-800" />
          )}
        </button>
        <button onClick={toggleMute} className="music-controls">
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-gray-800" />
          ) : (
            <Volume2 className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Index;
