import { useParams } from "react-router-dom";
import FadeIn from "./FadeIn";
import Hinges from '../assets/images/Hinges.png'

const modulerkitechen = "http://thewowstyle.com/wp-content/uploads/2015/01/modular-kitchen.jpg";
const modularcorner = "https://foter.com/photos/419/freestanding-cabinet-with-space-for-appliances.jpeg";
const DrawerChannels = "https://m.media-amazon.com/images/I/61YMxpNRMoL._AC_.jpg";
const GlassHardware = "https://www.allyhardware.com/uploads/image/20240407/16/balustrade-system.webp";
const SlidingSystems = "https://tse4.mm.bing.net/th/id/OIP.PNSVsRJTtGVUkPsLOmfVygHaEg?pid=Api&P=0&h=220";
const DigitalSmartLocks = "https://www.gatemasterlocks.com/wp-content/uploads/2018/12/DGL.jpg";
const acrylicdoorhandles = "https://i.etsystatic.com/23586388/r/il/1b9e62/4982104544/il_1080xN.4982104544_opv5.jpg";
const homewardrobe = "https://i5.walmartimages.com/asr/65723093-0b4c-49b4-bae1-414a967a95f9.1e13e4cf245660bdb2ef82237d972d3d.jpeg";
const woodenpvc = "https://image.made-in-china.com/2f0j00FVHudILhlcky/Waterproof-Fireproof-Wood-Grain-PVC-Wood-Plastic-Composite-Wall-Panel-WPC-Cladding.jpg"
const marbelpvc = "https://tse1.mm.bing.net/th/id/OIP.kiN1NcOTDHjxINVC11ONAAHaFq?pid=Api&P=0&h=220"
const slidingwardrob = "https://www.ulcdn.net/images/products/625699/slide/1998x1089/Avalon_Sliding_Door_Wardrobe_Choc_Oak_Sil_Gy_1.jpg?1658148748";
const hingedwardrob = "https://tse2.mm.bing.net/th/id/OIP.QZ4PFW1goVIVV6RMEOMxAgHaJv?pid=Api&P=0&h=220"
const magiccorner = "http://cdn2.bigcommerce.com/server5800/f2egy8j/products/85/images/3080/Luxury_magic_corner_for_kitchen_corner_cupboards__19151.1508146180.1280.1280.jpg?c=2"
const carouselcorner = "https://www.hafele.co.nz/hap-live/static/WFS/Haefele-HNZ-Site/-/Haefele/en_NZ/pim/images/huge/apic-00650190.jpg";
const mortise = "https://www.radosteelindia.com/assets/img/products/mortise/15.jpg";
const lever = "http://handlesandknobsdirect.co.uk/cdn/shop/collections/434233038_331642629887845_1508114224681900987_n.jpg?v=1718966032"
const mortiselock = "https://images.homedepot-static.com/productImages/b7a809b7-349c-4697-9d5e-c443f224a198/svn/prime-line-door-lock-accessories-e-2330-64_1000.jpg"
const smart = "https://i5.walmartimages.com/seo/Waterproof-Tuya-Wifi-Smart-Door-Lock-Digital-Password-Double-Fingerprint-Electronic-Rim-Lock-for-Outdoor-Iron-Gate-Door_b143446a-a7ea-4522-85c2-61f792c985a0.937465b8a6bbabe2837d8471936829c2.jpeg"
// images imports (same as yours)

export default function CategoryProducts() {
  const { category } = useParams();

  const categoryData = {
    "modular-kitchen": {
      title: "Modular Kitchen",
      products: [
        { name: "Modular Kitchen Set", img: modulerkitechen },
        { name: "Kitchen Storage Units", img: modularcorner },
        { name: "Tall Kitchen Cabinets", img: homewardrobe },
      ],
    },

    "hardware-products": {
      title: "Hardware Products",
      products: [
        { name: "Hinges", img: Hinges },
        { name: "Drawer Channels", img: DrawerChannels },
        { name: "Glass Hardware", img: GlassHardware },
        { name: "Sliding Systems", img: SlidingSystems },
        { name: "Digital Smart Locks", img: DigitalSmartLocks },
      ],
    },

    "home-furniture": {
      title: "Home Furniture",
      products: [
        { name: "Wardrobe", img: homewardrobe },
        { name: "Carousel Corner Unit", img: carouselcorner },
      ],
    },

    "acrylic-handles": {
      title: "Acrylic Door Handles",
      products: [
        { name: "Transparent Acrylic Handle", img: acrylicdoorhandles },
        { name: "Premium Acrylic Handle", img: acrylicdoorhandles },
      ],
    },

    "wall-panels": {
      title: "PVC Wall Panels",
      products: [
        { name: "Wood Finish PVC Wall Panels", img: woodenpvc },
        { name: "Marble Finish PVC Wall Panels", img: marbelpvc },
      ],
    },

    "wardrobe": {
      title: "Home Wardrobe",
      products: [
        { name: "Sliding Door Wardrobe", img: slidingwardrob },
        { name: "Hinged Door Wardrobe", img: hingedwardrob },
      ],
    },

    "modular-corner": {
      title: "Modular Corners",
      products: [
        { name: "Magic Corner Unit", img: magiccorner },
        { name: "Hinged Door Wardrobe", img: hingedwardrob },
      ],
    },

    "door-handles": {
      title: "Modular Corners",
      products: [
        { name: "Mortise Handle", img: mortise },
        { name: "Lever Handle", img: lever },
      ],
    },
    "door-locks": {
      title: "Door Locks",
      products: [
        { name: "Mortise Lock", img: mortiselock },
        { name: "Digital Smart Lock", img: smart },
      ],
    },
  };

  const data = categoryData[category];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white pt-32 text-center">
        <h1 className="text-3xl font-semibold">Category Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] text-white pt-28 pb-16 min-h-screen">
      <FadeIn>
        <h1 className="text-center text-4xl sm:text-5xl font-semibold">
          {data.title}
        </h1>
      </FadeIn>

      <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.products.map((item, i) => (
          <FadeIn key={i} delay={i * 120}>
            <div className="bg-[#222] rounded-xl overflow-hidden hover:shadow-xl transition-all">
              <img
                src={item.img}
                alt={item.name}
                className="w-full aspect-square object-cover"
              />
              <h3 className="text-center py-4 text-lg font-medium">
                {item.name}
              </h3>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
