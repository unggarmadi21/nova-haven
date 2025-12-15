import { useState } from 'react';

interface NFTCardProps {
  title: string;
  creator: string;
  price: string;
  image: string;
  category?: string;
}

export function NFTCard({ title, creator, price, image, category }: NFTCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl border border-[#15BFFD]/70 bg-[#080B2A]/70 backdrop-blur-sm p-4 transition-all duration-300 hover:border-[#FF00EA]/70 hover:shadow-[0_0_30px_rgba(255,0,234,0.3)]">
        {category && (
          <div className="absolute top-6 right-6 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-primary text-white">
              {category}
            </span>
          </div>
        )}
        
        <div className="relative mb-4 overflow-hidden rounded-xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-poppins font-medium text-white text-lg">{title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-6 h-6 rounded-full bg-gradient-primary" />
                <span className="text-sm text-gray-400">{creator}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
            <div>
              <p className="text-xs text-gray-400">Current Bid</p>
              <div className="flex items-center gap-1 mt-1">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M8.006 12.197L3.565 10.029L8.002 16L8.668 15.102V11.873L8.006 12.197Z" fill="url(#paint0_linear)"/>
                  <path d="M8.002 0L2.906 9.143H13.097L8.002 0Z" fill="url(#paint1_linear)"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="3.565" y1="16" x2="10.042" y2="12.912" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2600FC"/>
                      <stop offset="1" stopColor="#FF00EA"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="2.906" y1="9.143" x2="14.356" y2="2.025" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2600FC"/>
                      <stop offset="1" stopColor="#FF00EA"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="font-semibold gradient-text">{price} ETH</span>
              </div>
            </div>
            
            <button className="px-6 py-2 rounded-full bg-gradient-primary text-white font-medium text-sm transition-all hover:shadow-[0_0_20px_rgba(255,0,234,0.5)] hover:scale-105">
              Bid Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
