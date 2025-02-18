
import { useState } from 'react';
import { Heart } from 'lucide-react';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative Hearts */}
      <Heart className="heart-decoration text-4xl top-20 left-[10%]" fill="#D946EF" />
      <Heart className="heart-decoration text-3xl top-40 right-[15%]" fill="#D946EF" />
      <Heart className="heart-decoration text-5xl bottom-32 left-[20%]" fill="#D946EF" />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center relative">
        <h1 className="fade-in text-4xl md:text-6xl font-bold mb-6 text-gray-800">
          For My Beloved ❤️
        </h1>
        <p className="slide-up text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Every moment with you feels like a beautiful dream come true. Your smile lights up my world,
          and your love makes every day extraordinary. This is my way of showing you how much you mean to me.
        </p>
      </div>

      {/* Photo Grid */}
      <div className="photo-grid">
        <div className="polaroid-card">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Special moment 1"
          />
          <p className="caption">Our first date ❤️</p>
        </div>
        <div className="polaroid-card">
          <img
            src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
            alt="Special moment 2"
          />
          <p className="caption">That perfect sunset 💕</p>
        </div>
        <div className="polaroid-card">
          <img
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
            alt="Special moment 3"
          />
          <p className="caption">Forever together 💝</p>
        </div>
      </div>

      {/* Love Message */}
      <div className="container mx-auto px-4 py-20">
        <div className="glass-card p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            My Dearest Love <Heart className="text-pink-500" fill="#EC4899" />
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            From the moment our paths crossed, I knew my life would never be the same.
            Your love has given me wings to fly and a home to return to.
            Every smile, every laugh, every tender moment we share becomes a precious memory
            I treasure in my heart. You are my inspiration, my comfort, and my greatest adventure.
            Thank you for being you, and for choosing to share your life with me.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mt-4 font-semibold">
            Forever yours, <Heart className="inline text-pink-500" fill="#EC4899" />
            <br />
            [Your Name]
          </p>
        </div>
      </div>

      {/* YouTube Player */}
      <div className="music-player">
        <iframe
          width="300"
          height="80"
          src="https://www.youtube.com/embed/-HAbOWi5rD8?autoplay=0"
          title="Background Music"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Index;
