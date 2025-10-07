// import launchVideo from "./Beautiful.mp4"; // Adjust the path if needed

const LaunchVideoBanner = () => {
  return (
    <div className="bg-[#f9f9f9] px-4 md:px-10 py-12">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Exclusive Launch Alert!
        </h2>
        <p className="text-gray-600 text-sm">
          You saw it here first. Shop now!
        </p>
      </div>

      {/* Responsive Video */}
      <div className="rounded-xl overflow-hidden shadow-lg w-full">
        <video
          className="w-full h-48 sm:h-64 md:h-72 lg:h-96 object-cover object-center rounded-xl"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://drive.google.com/uc?export=download&id=1hRuR-kM9ImBcMsLKWe9weE7IWONrhFIm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default LaunchVideoBanner;
