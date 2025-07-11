import launchVideo from "./77005-561052342_tiny.mp4"; // adjust the path if needed
const LaunchVideoBanner = () => {
  return (
    <div className="bg-[#f9f9f9] px-4 md:px-10 py-8">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Exclusive Launch Alert!</h2>
        <p className="text-gray-600 text-sm">You saw it here first. Shop now!</p>
      </div>

      {/* Video Banner */}
      <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-screen-xl mx-auto">
        <video
          className="w-full h-auto object-cover h-96"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* <source src="https://cdn.pixabay.com/video/2023/04/25/163582-822406353_large.mp4" type="video/mp4" /> */}
         <source src={launchVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default LaunchVideoBanner;
