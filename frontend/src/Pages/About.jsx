import { assets } from "../assets/assets";
import NewsLetterBox from "../Components/NewsLetterBox";
import Title from "../Components/Title";


const About = () => {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-28 py-12">
      {/* About Us Section */}
      <div className="text-center mb-10">
    <Title text1={'ABOUT'} text2={'US'}/>
          </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Image */}
        <div className="flex-1">
          <img
            src={assets.about_img} width={600} // replace with your actual image
            alt="About Us"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-gray-700 leading-relaxed">
          <p className="mb-4">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="mb-4">
            Since our inception, we’ve worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We’re dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20">
        <h2 className="text-center text-lg font-semibold tracking-wide mb-8">
          WHY <span className="text-black">CHOOSE US</span>
          <div className="w-16 h-[1px] bg-black mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 divide-y md:divide-y-0 md:divide-x rounded-lg">
          <div className="p-6">
            <h4 className="font-semibold mb-2">Quality Assurance:</h4>
            <p className="text-sm text-gray-600">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="p-6">
            <h4 className="font-semibold mb-2">Convenience:</h4>
            <p className="text-sm text-gray-600">
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className="p-6">
            <h4 className="font-semibold mb-2">Exceptional Customer Service:</h4>
            <p className="text-sm text-gray-600">
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <NewsLetterBox/>
    </div>
  );
};

export default About;
