import React from 'react';
import { SOCIAL_LINKS, PARTNERS, LEVEL_UP_ITEMS, ABOUT_TEXT, EMAIL_CONTACT } from './constants';

const ProfileHeader = () => (
  <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
    <div className="w-24 h-24 md:w-32 md:h-32 mb-6"></div>
    <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-3 drop-shadow-lg">
      UNXIN STUDIO
    </h1>
    <div className="px-4 py-1 border border-white/30 rounded-full bg-black/20 backdrop-blur-sm">
      <p className="font-mono font-medium text-white/80 tracking-widest text-xs uppercase">
        The Future of Visual Storytelling
      </p>
    </div>
  </div>
);

const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex items-center gap-4 mb-8 mt-16 animate-fade-in">
    <div className="h-px bg-white/30 flex-1"></div>
    <h2 className="font-mono text-lg md:text-xl font-bold text-white uppercase tracking-widest border border-white/30 px-6 py-2 rounded-full bg-studio-blue/50 backdrop-blur-md">
      {title}
    </h2>
    <div className="h-px bg-white/30 flex-1"></div>
  </div>
);

// Style based on the reference image: Rounded border, uppercase, mono font, transparent with white outline
const LinkCard: React.FC<{ label: string; url: string }> = ({ label, url }) => (
  <a 
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full p-4 border border-white rounded-xl hover:bg-white hover:text-studio-blue transition-all duration-300 group relative overflow-hidden"
  >
    <div className="flex items-center justify-center relative z-10">
      <span className="font-mono font-bold text-sm md:text-base uppercase tracking-widest text-center">
        {label}
      </span>
      <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        →
      </span>
    </div>
  </a>
);

const LevelUpItem: React.FC<{ title: string; url?: string }> = ({ title, url }) => {
  const Content = () => (
    <div className="relative p-4 border border-white/20 bg-white/5 rounded-lg hover:bg-white hover:text-studio-blue transition-all duration-300 group cursor-pointer h-full flex items-center">
      <h3 className="font-mono text-xs md:text-sm font-medium uppercase tracking-wide">
        {title}
      </h3>
    </div>
  );

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Content />
    </a>
  ) : (
    <div className="h-full">
      <Content />
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-studio-blue text-white selection:bg-white selection:text-studio-blue pb-24 font-mono overflow-x-hidden relative">
      
      {/* Background Image Area */}
      <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
        <img 
          src="https://iili.io/faV270Q.md.jpg" 
          alt="Background" 
          className="w-full h-auto opacity-70"
        />
        {/* Gradient Fade to blend with blue background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1568]/20 via-[#0a1568]/60 to-[#0a1568]"></div>
      </div>

      {/* Heavy Noise Texture for that "Retro/Blueprint" look */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.15] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      {/* Subtle Glow at top */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 blur-[100px] pointer-events-none rounded-full z-0"></div>

      <div className="max-w-3xl mx-auto px-6 py-20 relative z-10">
        
        <ProfileHeader />

        <SectionTitle title="About Us" />
        <div className="bg-white/5 border border-white/20 p-8 rounded-2xl backdrop-blur-sm text-center shadow-2xl">
          <p className="text-white/90 leading-relaxed font-mono text-sm md:text-base tracking-wide">
            {ABOUT_TEXT}
          </p>
        </div>

        <SectionTitle title="Find Us" />
        <div className="grid grid-cols-2 gap-4">
          {SOCIAL_LINKS.map((item, idx) => (
            <LinkCard key={idx} {...item} />
          ))}
        </div>

        <SectionTitle title="Level Up" />
        <div className="grid grid-cols-1 gap-3">
          {LEVEL_UP_ITEMS.map((item, idx) => (
            <div key={idx} className="w-full">
               <LevelUpItem title={item.title} url={item.url} />
            </div>
          ))}
        </div>

        <SectionTitle title="Creative Partner" />
        <div className="flex flex-wrap justify-center gap-3">
          {PARTNERS.map((partner, idx) => (
            <span key={idx} className="px-4 py-2 text-xs md:text-sm font-bold font-mono text-white border border-white rounded-lg uppercase tracking-wider hover:bg-white hover:text-studio-blue transition-colors cursor-default">
              {partner}
            </span>
          ))}
        </div>

        <SectionTitle title="Contact" />
        <a 
          href={`mailto:${EMAIL_CONTACT}`}
          className="block text-center font-mono text-lg md:text-xl text-white/90 hover:text-white transition-colors duration-300 lowercase tracking-wider"
        >
          {EMAIL_CONTACT}
        </a>

        <footer className="mt-32 text-center pt-8 border-t border-white/10">
          <p className="font-mono text-[10px] text-white/50 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} UNXIN STUDIO. All rights reserved.
          </p>
        </footer>

      </div>
    </div>
  );
}