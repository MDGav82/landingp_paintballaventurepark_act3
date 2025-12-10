import React from 'react';
import { ACTIVITIES } from '../constants';

const ActivityCard: React.FC<{ 
  title: string; 
  id: string; 
  onClick: (id: string) => void 
}> = ({ title, id, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className="group relative h-40 w-full bg-white border-2 border-stone-200 hover:border-red-600 transition-all duration-300 rounded-xl overflow-hidden flex flex-col items-center justify-center shadow-lg hover:shadow-red-500/20 active:scale-95"
  >
    {/* Subtle Pattern Background */}
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
    
    {/* Animated Background on Hover */}
    <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity z-10"></div>
    
    {/* Corner Accent */}
    <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-t-transparent border-r-stone-200 group-hover:border-r-red-600 transition-colors z-20"></div>

    <span className="relative z-20 text-xl md:text-2xl font-black uppercase tracking-wider text-stone-800 group-hover:text-red-700 transition-colors">
      {title}
    </span>
    
    <div className="relative z-20 mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
      <span className="text-xs font-bold text-red-600 uppercase">Voir l'offre</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-red-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </div>
  </button>
);

interface ActivityGridProps {
  onScrollTo: (id: string) => void;
}

const ActivityGrid: React.FC<ActivityGridProps> = ({ onScrollTo }) => {
  // Mapping activities to specific layout positions based on the user's diagram
  // Diagram:
  //      [Paintball]
  // [Gelly] [Airsoft] [Laser]
  // [Haches] [Archery] [Bubble]
  
  const paintball = ACTIVITIES.find(a => a.id === 'paintball');
  const row2 = ACTIVITIES.filter(a => ['gellyball', 'airsoft', 'laser'].includes(a.id));
  const row3 = ACTIVITIES.filter(a => ['haches', 'archery', 'bubble'].includes(a.id));

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      {/* Mobile Layout: Simple Stack */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {ACTIVITIES.map(activity => (
          <ActivityCard key={activity.id} title={activity.title} id={activity.id} onClick={onScrollTo} />
        ))}
      </div>

      {/* Desktop Layout: The Requested Shape */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        
        {/* Row 1: Paintball Centered */}
        <div className="col-start-2">
          {paintball && <ActivityCard title={paintball.title} id={paintball.id} onClick={onScrollTo} />}
        </div>

        {/* Row 2: Gelly, Airsoft, Laser */}
        {row2.map(activity => (
          <ActivityCard key={activity.id} title={activity.title} id={activity.id} onClick={onScrollTo} />
        ))}

        {/* Row 3: Haches, Archery, Bubble */}
        {row3.map(activity => (
          <ActivityCard key={activity.id} title={activity.title} id={activity.id} onClick={onScrollTo} />
        ))}
      </div>
    </div>
  );
};

export default ActivityGrid;