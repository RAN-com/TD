import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react"; // Import Lucide icons

const ContactInfo = () => {
  return (
    <div className="flex flex-wrap justify-center  w-full h-auto p-20 gap-8 text-white">
      {/* Contact Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-64 hover:bg-gray-700 transition">
        <MapPin className="w-8 h-8 text-yellow-400 mb-3" />
        <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
        <p className="text-sm text-gray-300 text-center">New Orleans, USA</p>
      </div>

      {/* Contact Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-64 hover:bg-gray-700 transition">
        <Phone className="w-8 h-8 text-yellow-400 mb-3" />
        <h3 className="text-xl font-semibold mb-2">Call Us</h3>
        <p className="text-sm text-gray-300 text-center">+12 958 648 597</p>
      </div>

      {/* Contact Card */}
      <div className="bg-gray-800 p-6 rounded-lg   shadow-lg flex flex-col items-center w-64 hover:bg-gray-700 transition">
        <Clock className="w-8 h-8 text-yellow-400 mb-3" />
        <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
        <p className="text-sm text-gray-300 text-center">Mon - Sat: 10:00 AM - 7:00 PM</p>
      </div>

      {/* Contact Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-64 hover:bg-gray-700 transition">
        <Mail className="w-8 h-8 text-yellow-400 mb-3" />
        <h3 className="text-xl font-semibold mb-2">Email Us</h3>
        <p className="text-sm text-gray-300 text-center">
          <a href="mailto:tulos@gmail.com" className="text-yellow-400 hover:underline">
            tulos@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
