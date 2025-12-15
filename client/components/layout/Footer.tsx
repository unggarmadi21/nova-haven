import { Twitter, MessageCircle, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F051D]/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-10">
                <svg viewBox="0 0 44 25" fill="none" className="absolute top-0 left-0 w-11 h-6">
                  <path d="M38.359 12.444H15.111L10.529 24.444H0L9.333 0H43.111L38.359 12.444Z" fill="#EFEFEF"/>
                </svg>
                <svg viewBox="0 0 44 25" fill="none" className="absolute top-4 left-2 w-11 h-6">
                  <path d="M9.333 0H43.111L33.778 24.444H0L9.333 0Z" fill="url(#paint0_linear_footer)"/>
                  <defs>
                    <linearGradient id="paint0_linear_footer" x1="0" y1="24.444" x2="34.132" y2="-9.129" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2600FC"/>
                      <stop offset="1" stopColor="#FF00EA"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-kanit text-2xl font-semibold text-white">NFTGO</span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Join our Discord channel or follow us on Twitter to keep up to date with our latest work and announcements.
            </p>
            
            <div className="flex gap-5">
              <a href="#" className="text-white hover:text-[#15BFFD] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#15BFFD] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#15BFFD] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 text-lg">Quick Link</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#collection" className="text-gray-400 hover:text-white transition-colors">Collection</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 text-lg">Community</h3>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How it works!</a></li>
              <li><a href="#blockchain" className="text-gray-400 hover:text-white transition-colors">Blockchain</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Get in touch</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 Nft All Rights Reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy policy</a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
