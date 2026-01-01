import { assets } from "../assets/assets";


const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-8 pt-12 pb-5 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Logo + Description */}
        <div className="flex-2">
         <img src={assets.logo} width={150} alt="" />
          <p className="mt-4 text-sm leading-relaxed text-slate-600 max-w-sm font-extrabold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-black mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm text-slate-700 font-extrabold">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-black mb-4">GET IN TOUCH</h3>
          <ul className="space-y-2 text-sm text-slate-700  font-extrabold">
            <li>+91 79845-83673</li>
            <li>yugbaid4@gmail.com</li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t pt-4 text-center text-sm text-gray-600">
        Copyright 2025© yugjaiin.dev - All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
