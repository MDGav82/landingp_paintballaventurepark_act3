import React from 'react';
import { Activity } from '../types';

interface ActivitySectionProps {
  activity: Activity;
  index: number;
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ activity, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section 
      id={activity.id} 
      className={`py-20 md:py-24 scroll-mt-20 ${isEven ? 'bg-white' : 'bg-stone-100'}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className={`flex flex-col md:flex-row gap-10 md:gap-20 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
          
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform hover:rotate-1 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10"></div>
              <img 
                src={activity.image} 
                alt={activity.title} 
                className="w-full h-72 md:h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 z-20">
                 <span className="bg-yellow-400 text-stone-900 font-black text-xl px-4 py-2 rounded shadow-lg transform -skew-x-6 inline-block">
                    {activity.price}
                 </span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-baseline gap-3">
              <span className="text-6xl font-black text-stone-200 select-none">0{index + 1}</span>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 uppercase tracking-tight">
                {activity.title}
              </h2>
            </div>
            
            <div className="h-1 w-20 bg-red-600"></div>

            <p className="text-lg text-stone-600 leading-relaxed font-medium">
              {activity.fullDescription}
            </p>
            
            <div className="flex flex-wrap gap-4 py-4">
               <div className="flex items-center gap-2 text-stone-700 bg-white border border-stone-200 px-4 py-2 rounded-lg shadow-sm font-semibold">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                 </svg>
                 <span>Min. {activity.minPlayers} joueurs</span>
               </div>
               <div className="flex items-center gap-2 text-stone-700 bg-white border border-stone-200 px-4 py-2 rounded-lg shadow-sm font-semibold">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                 </svg>
                 <span>Âge : {activity.minAge}+</span>
               </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-red-500/30 text-lg uppercase tracking-wide">
              Réserver maintenant
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ActivitySection;