import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { CollectionsSection } from '@/components/sections/CollectionsSection';
import { RoadmapSection } from '@/components/sections/RoadmapSection';
import { CreatorsSection } from '@/components/sections/CreatorsSection';
import { NFTCard } from '@/components/nft/NFTCard';

export default function Index() {
  const featuredNFTs = [
    {
      title: 'Golden Hour',
      creator: 'John Doe',
      price: '3.2',
      image: 'https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=600&h=800&fit=crop',
      category: 'Art',
    },
    {
      title: 'Neon Dreams',
      creator: 'Jane Smith',
      price: '5.8',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=800&fit=crop',
      category: '3D',
    },
    {
      title: 'Cyber Punk',
      creator: 'Mike Johnson',
      price: '4.5',
      image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&h=800&fit=crop',
      category: 'Digital',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F051D] text-white overflow-hidden">
      <Navigation />
      
      <main className="pt-20">
        <HeroSection />

        <section id="collection" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute w-96 h-96 bg-[#2A3E84]/20 rounded-full blur-[175px] top-0 right-0" />
            <div className="absolute w-96 h-96 bg-[#2A3E84]/20 rounded-full blur-[175px] bottom-0 left-0" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-clash text-4xl md:text-5xl font-bold text-white mb-4">
                Weekly Top NFTs
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Outsource your nft collection project and get it quickly done and delivered remotely online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredNFTs.map((nft, index) => (
                <NFTCard key={index} {...nft} />
              ))}
            </div>

            <div className="text-center">
              <button className="px-8 py-3 rounded-full bg-gradient-primary text-white font-medium transition-all hover:shadow-[0_0_30px_rgba(255,0,234,0.5)] hover:scale-105">
                Explore More
              </button>
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 space-y-4">
                    <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl" />
                    <div className="aspect-[3/4] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl" />
                  </div>
                  <div className="col-span-1 space-y-4 pt-8">
                    <div className="aspect-[3/4] bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl" />
                    <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl" />
                  </div>
                  <div className="col-span-1 space-y-4">
                    <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-2xl" />
                    <div className="aspect-[3/4] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="font-clash text-4xl md:text-5xl font-bold text-white">
                  Why choose us?
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. Eros suspendisse varius enim ultrices isque et quis ctumst. Feugiat amet velit faucibus amet.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Eu feugiat adipiscing viverrfeugiat. Mollis tellus malesuada massa amet lacinia aliquamid ultrices vitae.
                </p>
                <button className="px-8 py-3 rounded-full border-2 border-white/50 text-white font-medium hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </section>

        <CollectionsSection />
        
        <section id="roadmap">
          <RoadmapSection />
        </section>

        <CreatorsSection />
      </main>

      <Footer />
    </div>
  );
}
