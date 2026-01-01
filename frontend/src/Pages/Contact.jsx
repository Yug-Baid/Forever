// Contact.jsx

import NewsLetterBox from "../Components/NewsLetterBox";

const Contact = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 px-4">
      {/* Title */}
      <h2 className="text-lg font-semibold tracking-widest uppercase mb-8">
        CONTACT <span className="text-black font-bold border-b-2 border-black">US</span>
      </h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center">
        {/* Left Image */}
        <div className="w-[320px] md:w-[400px]">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2" // replace with your image
            alt="Office desk"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text Content */}
        <div className="flex flex-col gap-6 text-gray-700">
          {/* Our Store */}
          <div>
            <h3 className="font-semibold text-lg text-black">Our Store</h3>
            <p className="mt-1 text-sm">54709 Willms Station</p>
            <p className="text-sm">Suite 350, Washington, USA</p>
            <p className="text-sm mt-2">Tel: (415) 555-0132</p>
            <p className="text-sm">
              Email:{" "}
              <a href="yugbaid4@gmail.com" className="text-blue-500">
                yugbaid4@gmail.com
              </a>
            </p>
          </div>

          {/* Careers */}
          <div>
            <h3 className="font-semibold text-lg text-black">
              Careers at Forever
            </h3>
            <p className="text-sm">
              Learn more about our teams and job openings.
            </p>
            <button className="mt-3 border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    
     <div className="w-full mt-10">
    <NewsLetterBox/>
     </div>
    </section>
  );
};

export default Contact;
