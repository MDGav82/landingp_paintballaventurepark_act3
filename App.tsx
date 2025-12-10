import React, { useState, useEffect } from 'react';
import ActivityGrid from './components/ActivityGrid';
import ActivitySection from './components/ActivitySection';
import { ACTIVITIES } from './constants';

const baseUrl = import.meta.env.BASE_URL;

// Using local images for the carousel as requested
const HERO_IMAGES = [
  `${baseUrl}hero1.jpg`,
  `${baseUrl}hero2.jpg`
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Carousel Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-red-500 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Image */}
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Aventure Paintball Park" 
              className="h-16 w-auto object-contain"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Text Logo if image is missing */}
            <div className="hidden flex-col items-start">
              <span className="font-black text-xl leading-none uppercase tracking-tighter text-red-700 font-serif">
                Aventure
              </span>
              <span className="font-bold text-xs uppercase tracking-widest text-stone-800 bg-yellow-400 px-1 -ml-1 transform -skew-x-12 inline-block text-center shadow-sm">
                Paintball Park
              </span>
            </div>
            Aventure Paintball Park
            {/* Si vous voyez ça je me sent au bout de ma vie, cordialement. */}
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="font-bold text-stone-700 hover:text-red-600 transition-colors">Activités</a>
            <a href="#" className="font-bold text-stone-700 hover:text-red-600 transition-colors">Tarifs</a>
            <a href="#" className="font-bold text-stone-700 hover:text-red-600 transition-colors">Offres</a>
            <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Réserver
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Carousel and Grid */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 min-h-[600px] flex flex-col justify-center items-center overflow-hidden">
         
         {/* Background Carousel */}
         <div className="absolute inset-0 z-0 bg-stone-900">
           {HERO_IMAGES.map((img, index) => (
             <div 
               key={index}
               className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                 index === currentImageIndex ? 'opacity-100' : 'opacity-0'
               }`}
               style={{ backgroundImage: `url('${img}')` }}
             />
           ))}
           {/* Dark Overlay - Reduced opacity for brighter look */}
           <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
         </div>
         
         <div className="container mx-auto px-4 relative z-10 w-full">
            {/* The Grid Component - Now the main focus */}
            <div className="animate-fade-in-up">
              <ActivityGrid onScrollTo={scrollToSection} />
            </div>
         </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-10 bg-stone-50">
        {ACTIVITIES.map((activity, index) => (
          <ActivitySection key={activity.id} activity={activity} index={index} />
        ))}
      </div>

      {/* Contact / Footer Section */}
      <section id="contact" className="bg-[#2a3035] text-white pt-12 pb-16 border-t-4 border-yellow-400">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Section Title */}
          <div className="flex flex-col items-center mb-16">
             <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
             <h2 className="text-5xl font-black uppercase tracking-wide text-white">Contact</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24 text-left">
            
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
               
               <div className="flex items-center gap-4">
                  <div className="text-yellow-400 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a href="mailto:Vivian@paintball-toulouse.fr" className="text-lg hover:text-yellow-400 transition-colors">
                    Vivian@paintball-toulouse.fr
                  </a>
               </div>

               <div className="flex items-start gap-4">
                  <div className="text-yellow-400 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">route de quint 31650 Saint-Orens de Gameville</span>
               </div>

               <div className="text-gray-300 italic text-sm leading-relaxed border-l-2 border-gray-600 pl-4">
                 (Attention pas de numéro mais panneaux paintball, airsoft, laser et bubble foot). L’idéal est d’utiliser l’application waze pour vous amener à l’entrée. Mettez « Aventure Paintball Park » et choisissez la ville de Saint-Orens de Gameville.
               </div>

               <ul className="list-disc pl-5 space-y-2 text-white/90">
                 <li>Ouverture toute l’année tous les jours sur réservation de 10H00 jusqu’à la nuit.</li>
               </ul>

            </div>

            {/* Right Column - Location Details & Button */}
            <div className="space-y-8 md:border-l md:border-gray-600 md:pl-12">
               
               <h3 className="text-2xl font-bold text-white">Quint-Fonsegrives</h3>
               
               <ul className="space-y-4 text-white/90">
                  <li className="flex gap-3">
                    <span className="text-yellow-400">•</span>
                    <span>Terrain multi-activités à Saint-Orens de Gameville / Quint-Fonsegrives à 6 kms de la rocade de Toulouse.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400">•</span>
                    <span>5 hectares – 9 zones de jeu.</span>
                  </li>
               </ul>

               <div className="pt-4">
                  <button className="bg-[#b93c3c] hover:bg-[#a03232] text-white font-medium text-lg px-8 py-3 rounded shadow-lg transition-all uppercase tracking-wide">
                    Réserver maintenant
                  </button>
               </div>

            </div>

          </div>
          
          <div className="mt-20 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Aventure Paintball Park. Tous droits réservés.
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;