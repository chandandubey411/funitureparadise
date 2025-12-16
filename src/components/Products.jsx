import { Link } from "react-router-dom";

import MortiseHandles from "../assets/images/MortiseHandles.png";
import prodFittings from "../assets/images/prod-fittings.jpg";
import prodLocks from "../assets/images/prod-locks.jpg";
import modularcorner from "../assets/images/modularcorner.png";
import homewardrobe from "../assets/images/homewardrobe.png";
import wallpanel from "../assets/images/wallpanel.png";
import acrylicdoorhandles from "../assets/images/acrylicdoorhandles.png";
import modulerkitechen from "../assets/images/modulerkitechen.png";
import hardware from "../assets/images/hardware.png";


const categories = [
  { title: "Modular Kitchen", slug: "modular-kitchen", img: modulerkitechen },
  { title: "Hardware Products", slug: "hardware-products", img: hardware },
  { title: "Home Furniture", slug: "home-furniture", img: prodFittings },
  {
    title: "Acrylic Door Handles",
    slug: "acrylic-handles",
    img: acrylicdoorhandles,
  },
  { title: "PVC Wall Panels", slug: "wall-panels", img: wallpanel },
  { title: "Home Wardrobe", slug: "wardrobe", img: homewardrobe },
  { title: "Modular Corners", slug: "modular-corner", img: modularcorner },
  { title: "Door Handles", slug: "door-handles", img: MortiseHandles },
  { title: "Door Locks", slug: "door-locks", img: prodLocks },
];

export default function Products() {
  return (
    <div className="bg-[#1a1a1a] text-white pt-28 pb-16">
      <h1 className="text-center text-4xl sm:text-5xl font-semibold">
        Our Products
      </h1>

      <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((item, i) => (
          <Link
            key={i}
            to={`/products/${item.slug}`}
            className="group bg-[#222] rounded-xl overflow-hidden hover:shadow-xl transition-all"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <h3 className="text-center py-4 text-lg font-medium">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
