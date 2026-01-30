import React from "react";
import { Link } from "react-router-dom";
import { Search, Briefcase, Package, ShieldCheck, ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-600">
            Rentask<span className="text-gray-700">.in</span>
          </h1>
          <nav className="space-x-6 hidden md:flex">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/rentals" className="hover:text-blue-600">Rent Items</Link>
            <Link to="/tasks" className="hover:text-blue-600">Hire Skills</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="px-4 py-2 border border-blue-500 rounded-lg text-blue-600 hover:bg-blue-500 hover:text-white transition">
              Login
            </Link>
            <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Connect, Share, and Earn with <span className="text-blue-600">Rentask</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Your one-stop platform for renting items and hiring skilled professionals — safely, quickly, and locally.
          </p>
          <div className="flex justify-center mt-6">
            <input
              type="text"
              placeholder="Search for items or skills..."
              className="w-2/3 p-3 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700 transition">
              <Search className="inline mr-2" size={18} /> Search
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10 text-gray-800">Why Choose Rentask?</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <Package className="text-blue-600 mx-auto mb-4" size={40} />
              <h4 className="text-xl font-semibold mb-2">Rent Anything</h4>
              <p className="text-gray-600">From tools and furniture to books and gadgets — access what you need when you need it.</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <Briefcase className="text-blue-600 mx-auto mb-4" size={40} />
              <h4 className="text-xl font-semibold mb-2">Hire Skilled People</h4>
              <p className="text-gray-600">Connect with local professionals for home repairs, delivery, cleaning, and more.</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <ShieldCheck className="text-blue-600 mx-auto mb-4" size={40} />
              <h4 className="text-xl font-semibold mb-2">Safe & Secure</h4>
              <p className="text-gray-600">Escrow payments, verified profiles, and transparent reviews ensure every deal is trustworthy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Start Sharing and Earning Today!</h3>
        <p className="text-lg mb-6">
          Join thousands of users who save money, share resources, and hire local talent with ease.
        </p>
        <Link
          to="/register"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get Started <ArrowRight className="inline ml-2" size={18} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Rentask Platform. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/privacy" className="mx-2 hover:text-white">Privacy Policy</Link>|
            <Link to="/terms" className="mx-2 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
