export function About() {
  return (
    <section
      className=" pt-24 md:pt-36  py-20  max-w-7xl mx-auto px-5 md:px-0  "
      id="about"
    >
      <div className="flex flex-col md:flex-row x-6 md:px-10 items-start justify-between space-y-6 md:space-y-0 md:space-x-8">
        {/* Text Section */}
        <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#022623] leading-tight">
            About Us
          </h2>
          <p className="text-base sm:text-lg  text-gray-600 max-w-3xl text-justify">
            Developer Community Jhapa is a thriving tech ecosystem spanning
            across 8 Municipalities and 7 Rural Municipalities in Jhapa
            district, Nepal. We're committed to fostering innovation, knowledge
            sharing, and professional growth in the tech community.
          </p>
        </div>

        {/* Placeholder Section (can be used for an image or additional content) */}
        <div className="w-full md:w-1/3 hidden md:flex items-center justify-center">
          {/* Add any additional content or leave empty */}
        </div>
      </div>
    </section>
  );
}
