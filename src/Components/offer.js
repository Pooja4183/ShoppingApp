const Offer = () => {
  const imageUrls = [
    "https://images.remotehub.com/0a8f07ac4d1811ec9c9e9620a085bd2a/original_thumb/e92ecfdc.png?version=1637752624",
    "https://cdn.shopify.com/s/files/1/0595/6691/5779/files/best-sellers-swiss-beauty.webp?v=1686555354",
    "https://static.vecteezy.com/system/resources/previews/024/606/583/non_2x/cosmetics-bottles-on-podium-mock-up-ad-banner-free-vector.jpg",
    "https://cdn.dribbble.com/userupload/26833854/file/original-05e42c774ce23e6f5df04bb9347418e8.jpg",
    "https://cdn-webdata.seasonsindia.com/assets/images/slides/seasons-mobile-shop-banner-08.jpg",
    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/4a8dbda2-8446-4472-99a7-6698fee3658d.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    "https://qomn.in/cdn/shop/files/Banner_1_9.jpg?v=1750938014&width=1880",
  ];

  return (
    <div className="bg-[#f9f9f9] px-4 md:px-10 lg:px-12 py-10">
      <h2 className="text-2xl font-bold mb-6">Exclusiv Launch Offers</h2>

      <div className="carousel carousel-center space-x-4 rounded-box w-full">
        {imageUrls.map((src, index) => (
          <div key={index} className="carousel-item w-64 md:w-72 lg:w-80 xl:w-96">
            <div className="w-full h-64 md:h-72 lg:h-80 xl:h-96 bg-white rounded-xl overflow-hidden shadow">
              <img
                src={src}
                alt={`Offer ${index + 1}`}
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
