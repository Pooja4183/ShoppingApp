import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardData = [
  {
    title: "Hair Care Deals",
    subtitle: "Extra Shine & Strength",
    image: "https://gitu.net/imgs/free-psd-misc/600x0_nike-free-psd-p1.jpg",
  },
  {
    title: "Serum Collections",
    subtitle: "Glow Like Never Before",
    image: "https://m.media-amazon.com/images/G/31/img23/beauty/coop/jupiter24_skincare_top_brands/Biotique._SY700_QL85_.jpg",
  },
  {
    title: "Makeup Must-Haves",
    subtitle: "Bestsellers for You",
    image: "https://www.tcnsclothing.com/img/tcns-brand-desktop-banner.jpg",
  },
  {
    title: "Monsoon Offers",
    subtitle: "New Season Essentials",
    image: "https://www.cleanovo.com/wp-content/uploads/2024/06/Carpet-Care-Tips-for-Monsoon-proof-Home-Blog-Cover.jpg",
  },
  {
    title: "Fragrance Finds",
    subtitle: "Upto 40% Off",
    image: "https://cdn.shopify.com/s/files/1/0608/9418/3561/files/Luxury_Perfume_brands_in_India.webp?v=1731503779",
  },
  {
    title: "Lipstick Bonanza",
    subtitle: "Buy 1 Get 1",
    image: "https://social.thearvindstore.com/data/insta_images/Arvindmenswearofficial/2850328587341588822.jpg",
  },
];

export default function PromoCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const handleNext = () => {
    if (startIndex + visibleCards < cardData.length) {
      setStartIndex(startIndex + visibleCards);
    }
  };

  const handlePrev = () => {
    if (startIndex - visibleCards >= 0) {
      setStartIndex(startIndex - visibleCards);
    }
  };

  return (
    <div className="bg-[#f9f9f9] py-8">
      <div className=" mx-auto px-12">
        <h2 className="text-2xl font-bold mb-1">Explore Our Top Brands</h2>
        <p className="text-sm text-gray-600 mb-6">A-listers to obsess over</p>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Card Wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{
                transform: `translateX(-${(startIndex / cardData.length) * 100}%)`,
                width: `${(cardData.length / visibleCards) * 100}%`,
              }}
            >
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="w-full max-w-[482px] h-[322px] relative rounded-xl overflow-hidden flex-shrink-0"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                    <p className="text-sm mb-2">{card.subtitle}</p>
                  </div>
                  <button className="absolute bottom-4 right-4 bg-white text-pink-600 text-sm font-semibold py-2 px-4 rounded-full shadow">
                    Shop Now →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
