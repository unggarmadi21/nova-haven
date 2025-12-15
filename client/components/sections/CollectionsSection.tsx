export function CollectionsSection() {
  const collections = [
    {
      name: 'Punk Art Collection',
      creator: 'James Watson',
      images: [
        'https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
      ],
    },
    {
      name: 'Punk Art Collection',
      creator: 'James Watson',
      images: [
        'https://images.unsplash.com/photo-1620641622423-e1152e9c83fc?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1643916861364-02e63ce3e52f?w=400&h=300&fit=crop',
      ],
    },
    {
      name: 'Illustration Art Collection',
      creator: 'James Watson',
      images: [
        'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1643330683233-ff2ac89b61ee?w=400&h=300&fit=crop',
      ],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-[#2A3E84]/20 rounded-full blur-[175px] top-0 left-0" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-clash text-4xl md:text-5xl font-bold text-white mb-4">
            Top Collection
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The largest and unique Super rare NFT marketplace
            <br />
            For crypto-collectibles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#080B2A]/50 to-[#080B2A]/30 backdrop-blur-sm border border-[#15BFFD]/50 rounded-2xl p-6 hover:border-[#FF00EA]/70 transition-all hover:shadow-[0_0_40px_rgba(255,0,234,0.3)]"
            >
              <div className="mb-4">
                <p className="text-sm text-[#B4C7CE] mb-2">Created by</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary" />
                  <span className="font-clash font-semibold gradient-text">{collection.creator}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="col-span-2 md:col-span-1">
                  <div className="relative h-72 rounded-xl overflow-hidden">
                    <img
                      src={collection.images[0]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1 space-y-4">
                  <div className="relative h-32 rounded-xl overflow-hidden">
                    <img
                      src={collection.images[1]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden">
                    <img
                      src={collection.images[2]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-clash text-xl font-semibold text-white">
                  {collection.name}
                </h3>
                <p className="text-sm text-gray-400">
                  Created by <span className="gradient-text font-semibold">{collection.creator}</span>
                </p>
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
