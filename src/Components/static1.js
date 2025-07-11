const Static1 = () => {
  return (
    <div className="px-12 py-12 bg-[#f9f9f9]">
      {/* Header */}
      <div className="mb-6 border-b pb-2">
        <h2 className="text-2xl font-bold">Get Gifting</h2>
        <p className="text-gray-600">Pamper, delight & spoil your loved ones</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="card bg-white rounded-xl overflow-hidden shadow-md">
          <figure className="h-60 md:h-72 lg:h-80 w-full">
            <img
              src="https://www.vmcdn.ca/f/files/shared/business-directory/share_flamborough/1200x628_homedecor.jpg"
              alt="Gift Store"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>

        {/* Card 2 (adjusted to show full image content) */}
        <div className="card bg-white rounded-xl overflow-hidden shadow-md">
          <figure className="h-60 md:h-72 lg:h-80 w-full bg-white">
            <img
            src="https://i.ytimg.com/vi/-hRv_pBgPmE/maxresdefault.jpg"
              // src="https://cdn.shopify.com/s/files/1/0595/6691/5779/files/best-sellers-swiss-beauty.webp?v=1686555354"
              alt="Gift Cards"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Static1;
