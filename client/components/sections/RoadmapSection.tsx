export function RoadmapSection() {
  const roadmapItems = [
    {
      month: 'January',
      title: 'Brief',
      description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
      side: 'left',
    },
    {
      month: 'February',
      title: 'Research',
      description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
      side: 'right',
    },
    {
      month: 'March',
      title: 'Discover',
      description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
      side: 'left',
    },
    {
      month: 'April',
      title: 'Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
      side: 'right',
    },
    {
      month: 'May',
      title: 'Testing',
      description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
      side: 'left',
    },
    {
      month: 'June',
      title: 'Launch & Feedback',
      description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
      side: 'right',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-[#2A3E84]/20 rounded-full blur-[175px] top-20 right-0" />
        <div className="absolute w-96 h-96 bg-[#2A3E84]/20 rounded-full blur-[175px] bottom-20 left-0" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-clash text-4xl md:text-5xl font-bold text-white mb-4">
            Road <span className="gradient-text">+++</span> map 2025
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The largest and unique Super rare NFT marketplace for crypto-collectibles
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#15BFFD] to-[#9C37FD]" />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  item.side === 'right' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`w-1/2 ${item.side === 'right' ? 'text-left' : 'text-right'}`}>
                  <div className="inline-block max-w-md">
                    <div className="bg-[#080B2A]/50 backdrop-blur-sm border border-[#15BFFD]/30 rounded-2xl p-6 hover:border-[#15BFFD]/70 transition-all">
                      <p className="font-clash text-sm text-[#15BFFD] mb-2">{item.month}</p>
                      <h3 className="font-clash text-2xl font-semibold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-gradient-primary shadow-[0_0_20px_rgba(255,0,234,0.8)]" />
                </div>

                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
