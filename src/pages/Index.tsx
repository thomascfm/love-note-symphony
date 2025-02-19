
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
          Para Minha Totoquinha ❤️
        </h1>
        <p className="slide-up text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
         Cada momento com você parece um lindo sonho que se torna realidade. Seu sorriso ilumina meu mundo 
        e seu amor torna cada dia extraordinário. Esta é a minha maneira de mostrar o quanto você significa para mim.

        </p>
      </div>

      {/* Photo Grid */}
      <div className="photo-grid">
        <div className="polaroid-card">
          <img
            src="https://drive.google.com/file/d/1tVvh_vwNGtwrlayVmv8ymkD3q3N4njl2/view?usp=sharing"
            alt="Special moment 1"
          />
          <p className="caption">Oia Como A Gente É Lindu ❤️</p>
        </div>
        <div className="polaroid-card">
          <img
            src="https:https://drive.google.com/file/d/1GxnAp6fu9BojtnQ6UtvJpy0rWn_M49Bl/view?usp=sharing"
            alt="Special moment 2"
          />
          <p className="caption">A mulher mais linda que existe 💕</p>
        </div>
        <div className="polaroid-card">
          <img
            src="https://drive.google.com/file/d/1gJTOVfZx5EzQLUcNlUvYoEZldzcslaUY/view?usp=sharing"
            alt="Special moment 3"
          />
          <p className="caption">Viver Juntinho é Bão Dimai 💝</p>
        </div>
      </div>

      {/* Love Message */}
      <div className="container mx-auto px-4 py-20">
        <div className="glass-card p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            Meu Amorzão, minha Totoquinha <Heart className="text-pink-500" fill="#EC4899" />
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Desde o momento em que nossos caminhos se cruzaram, eu sabia que minha vida nunca mais seria a mesma.
            Que eu tinha encontrado o amor de minha vida, uma menina linda, inteligente, gostosa, maravilhosa, cheia de si,
            indepentente, uma mulher incrivel com inumeras qualidades. A melhor pessoa que conheci e a melhor conexão.
            E cada dia mais que eu conhecia seu eu verdadeiro eu me apaixonava mais, e essa paixão foi se fortificando e
            virando uma bola de neve de amor, um amor forte, verdadeiro, respeitoso, intenso, que eu nunca tinha sentido.
            Seu amor me deu asas para voar e um lar para onde voltar. Cada sorriso, cada risada, cada momento de felicidade
            que compartilhamos torna-se uma memória preciosa que guardo em meu coração. Você é minha inspiração, admiração,
            meu conforto e minha maior aventura. Quero te proporcionar as melhores coisas desse mundo e te dar tudo aquilo
            que você merece, pois você merece muito mais do que o minimo. Obrigado por ser você e por escolher compartilhar 
            sua vida comigo. Amo te amar e ser amado por você e quero poder sempre te dar um amor livre, leve e verdadeiro.

          </p>
          <p className="text-lg md:text-xl text-gray-700 mt-4 font-semibold">
            Para sempre seu, <Heart className="inline text-pink-500" fill="#EC4899" />
            <br />
            Totoquinha <Heart className="inline text-pink-500" fill="#EC4899" />
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
