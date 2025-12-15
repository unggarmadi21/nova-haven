export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F051D]/85 to-[#0F051D] z-0" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#2A3E84]/30 rounded-full blur-[175px] -top-20 -left-20" />
        <div className="absolute w-96 h-96 bg-[#192065]/30 rounded-full blur-[175px] top-40 right-0" />
        
        <div className="absolute top-20 left-20">
          <svg className="w-4 h-4 text-[#FF00EA]" viewBox="0 0 15 17" fill="currentColor">
            <path d="M5.909 0L5.116 6.608L0 9.727L5.87 10.927L8.857 16.875L9.65 10.267L14.766 7.148L8.895 5.947L5.909 0Z"/>
          </svg>
        </div>
        <div className="absolute top-60 right-40">
          <svg className="w-6 h-6 text-[#FF00EA]" viewBox="0 0 15 17" fill="currentColor">
            <path d="M5.909 0L5.116 6.608L0 9.727L5.87 10.927L8.857 16.875L9.65 10.267L14.766 7.148L8.895 5.947L5.909 0Z"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-clash text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Cryptocurrency</span>
                <br />
                <span className="text-white">Just Got Even Better</span>
              </h1>
              
              <p className="text-lg text-gray-300 max-w-2xl font-poppins">
                Best nft collection freelance services online. Outsource your nft collection project and get it quickly done and delivered remotely online.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-gradient-primary text-white font-medium transition-all hover:shadow-[0_0_30px_rgba(255,0,234,0.5)] hover:scale-105">
                Connect Wallet
              </button>
              
              <button className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#15BFFD]/50 text-white font-medium hover:border-[#15BFFD] transition-all">
                <span className="gradient-text">Create NFTs</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            <div className="pt-8">
              <p className="text-white font-semibold mb-4 font-clash">Last 7 days popular search</p>
              <div className="flex flex-wrap gap-3">
                {['All', 'Music', '3D Abstract', 'Game', 'Sports', 'Cartoon', 'Virtual World', 'Classic'].map((tag) => (
                  <button
                    key={tag}
                    className={`px-5 py-2 rounded-full border transition-all ${
                      tag === 'All' 
                        ? 'bg-gradient-primary text-white border-transparent' 
                        : 'border-[#636B6F] text-white hover:border-[#15BFFD]'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#15BFFD]/20 to-[#9C37FD]/20 rounded-3xl blur-2xl" />
              
              <div className="relative space-y-6">
                <div className="transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                  <div className="backdrop-blur-md bg-[#080B2A]/70 border border-[#15BFFD]/70 rounded-2xl p-6 shadow-2xl">
                    <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-400">Golden Hour</p>
                        <p className="text-white font-semibold">3.2 ETH</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="transform rotate-[8deg] hover:rotate-0 transition-transform duration-500">
                  <div className="backdrop-blur-md bg-[#080B2A]/70 border border-[#FF00EA]/70 rounded-2xl p-6 shadow-2xl">
                    <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-400">Crypto Art</p>
                        <p className="text-white font-semibold">5.0 ETH</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
