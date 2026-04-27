import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto px-6 py-16">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">About Prodify</h1>

      {/* Description */}
      <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12">
        Prodify is a smart product management platform designed to help users
        organize, track, and manage products efficiently. Whether you're
        handling inventory or building a digital store, Prodify keeps everything
        structured and simple.
      </p>

      {/* Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className=" rounded-xl overflow-hidden">
          <img
            src="/about.jpg"
            alt="about"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold mb-4">Why Prodify?</h2>

          <ul className="space-y-3 text-gray-500">
            <li>✔ Simple and clean product tracking system</li>
            <li>✔ Fast filtering and search experience</li>
            <li>✔ Secure authentication with Firebase</li>
            <li>✔ Responsive design for all devices</li>
          </ul>

          <Link href="/items">
            <button className="btn btn-primary rounded hover:opacity-90 transition">
              View Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
