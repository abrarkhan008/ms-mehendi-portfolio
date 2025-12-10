import React, { useState } from "react";
import {
  Camera,
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  X,
} from "lucide-react";

const MehendiPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Placeholder images - you'll replace these with actual photos
  const bridalDesigns = Array(14)
    .fill(null)
    .map((_, i) => ({
      id: `bridal-${i}`,
      category: "bridal",
      title: `Bridal Design ${i + 1}`,
      image: `/images/bridal/bridal${i + 1}.jpg`,
    }));

  const handDesigns = Array(10)
    .fill(null)
    .map((_, i) => ({
      id: `hand-${i}`,
      category: "hands",
      title: `Hand Design ${i + 1}`,
      image: `/images/hands/hand${i + 1}.jpg`,
    }));

  const legDesigns = Array(5)
    .fill(null)
    .map((_, i) => ({
      id: `leg-${i}`,
      category: "legs",
      title: `Leg Design ${i + 1}`,
      image: `/images/legs/leg${i + 1}.jpg`,
    }));

  const allDesigns = [...bridalDesigns, ...handDesigns, ...legDesigns];

  const filteredDesigns =
    activeCategory === "all"
      ? allDesigns
      : allDesigns.filter((d) => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <div className="mb-6 inline-block">
              <Camera className="w-16 h-16 mx-auto mb-4 animate-bounce" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              MS Mehendi Art
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100">
              Creating Beautiful Bridal Mehendi Designs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+918660238832"
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Book Now
              </a>
              <a
                href="https://wa.me/918660238832"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none -z-10">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </header>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: "all", label: "All Designs", count: allDesigns.length },
            { id: "bridal", label: "Bridal Mehendi", count: 14 },
            { id: "hands", label: "Hand Designs", count: 10 },
            { id: "legs", label: "Leg Designs", count: 5 },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-pink-50 shadow"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDesigns.map((design, index) => (
            <div
              key={design.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer bg-white"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(design)}
            >
              <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-pink-100 to-orange-100">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {design.title}
                  </h3>
                  <p className="text-pink-200 text-sm capitalize">
                    {design.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="tel:+918660238832"
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 text-center"
            >
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-pink-100">+91 86602 38832</p>
            </a>

            <a
              href="mailto:muskanshikeh11@gmail.com"
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 text-center"
            >
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-pink-100 text-sm break-all">
                muskanshikeh11@gmail.com
              </p>
            </a>

            <a
              href="https://www.instagram.com/__ms_mehendi_art__?igsh=OGh2ZzZoN3BhOGpt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 text-center"
            >
              <Instagram className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Instagram</h3>
              <p className="text-pink-100">@__ms_mehendi_art__</p>
            </a>

            <a
              href="https://maps.app.goo.gl/5c1AW6CkPEJZggu88"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 text-center"
            >
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-pink-100 text-sm">
                10th Cross, Norani Mohalla, Labour Colony, Mandya
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 MS Mehendi Art. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Creating beautiful memories, one design at a time
          </p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[90vh] overflow-auto">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-2xl font-semibold">
                {selectedImage.title}
              </h3>
              <p className="text-pink-400 capitalize">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MehendiPortfolio;
