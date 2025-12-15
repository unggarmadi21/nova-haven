export function CreatorsSection() {
  const creators = Array(9).fill({
    name: 'Emerson Philips',
    eth: '3.2',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
  });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-[#2A3E84]/20 rounded-full blur-[175px] bottom-0 right-0" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-clash text-4xl md:text-5xl font-bold text-white mb-4">
            Our creator
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The largest and unique Super rare NFT marketplace
            <br />
            For crypto-collectibles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-[#15BFFD]/50 rounded-2xl p-6 hover:border-[#FF00EA]/70 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-primary overflow-hidden">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-clash text-lg font-medium text-white">
                      {creator.name}
                    </h3>
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
                      <span className="font-clash font-semibold gradient-text">{creator.eth} ETH</span>
                    </div>
                  </div>
                </div>
                
                <button className="text-[#15BFFD] hover:text-[#FF00EA] font-medium underline transition-colors">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 rounded-full border-2 border-[#15BFFD]/50 text-white font-medium hover:border-[#15BFFD] hover:shadow-[0_0_20px_rgba(21,191,253,0.5)] transition-all">
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
}
