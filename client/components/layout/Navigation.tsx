import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F051D]/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-10">
              <svg viewBox="0 0 44 25" fill="none" className="absolute top-0 left-0 w-11 h-6">
                <path d="M38.359 12.444H15.111L10.529 24.444H0L9.333 0H43.111L38.359 12.444Z" fill="#EFEFEF"/>
              </svg>
              <svg viewBox="0 0 44 25" fill="none" className="absolute top-4 left-2 w-11 h-6">
                <path d="M9.333 0H43.111L33.778 24.444H0L9.333 0Z" fill="url(#paint0_linear)"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="24.444" x2="34.132" y2="-9.129" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2600FC"/>
                    <stop offset="1" stopColor="#FF00EA"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="font-kanit text-2xl font-semibold text-white">NFTGO</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-white font-bold hover:text-[#15BFFD] transition-colors">Home</a>
            <a href="#collection" className="text-white font-bold hover:text-[#15BFFD] transition-colors">Collection</a>
            <a href="#choose" className="text-white font-bold hover:text-[#15BFFD] transition-colors">Choose</a>
            <a href="#roadmap" className="text-white font-bold hover:text-[#15BFFD] transition-colors">Roadmap</a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 hover:text-[#15BFFD] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            <button className="px-6 py-3 rounded-full bg-gradient-primary text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(255,0,234,0.5)]">
              Connect Wallet
            </button>

            <button className="p-3 rounded-full bg-gradient-primary text-white transition-all hover:shadow-[0_0_20px_rgba(255,0,234,0.5)]">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>

          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0F051D]">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <a href="#home" className="block text-white font-bold hover:text-[#15BFFD] transition-colors">Home</a>
            <a href="#collection" className="block text-white font-bold hover:text-[#15BFFD] transition-colors">Collection</a>
            <a href="#choose" className="block text-white font-bold hover:text-[#15BFFD] transition-colors">Choose</a>
            <a href="#roadmap" className="block text-white font-bold hover:text-[#15BFFD] transition-colors">Roadmap</a>
            <button className="w-full px-6 py-3 rounded-full bg-gradient-primary text-white font-medium">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
