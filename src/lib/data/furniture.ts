export interface FurnitureItem {
  slug: string;
  name: string;
  category: string;
  image: string;
  additionalImages?: string[];
  shortDescription: string;
  fullDescription: string;
  material: string;
  woodType: string;
  fabricType?: string;
  finishType: string;
  color: string;
  style: string;
  roomType: string;
  length: string;
  width: string;
  height: string;
  weight?: string;
  rating: number;
  reviews: number;
  dimensions: string;
  designStyle: string;
  finish: string;
  customization: string[];
  seatingCapacity: string;
  features?: string[];
  careInstructions?: string[];
}

const LIVING = [
  "/images/garden-lounge-3.jpg",
  "/images/sofa-set-4.jpg",
  "/images/dining-table-1.jpg",
  "/images/sofa-set-6.jpg",
  "/images/console-1.jpg",
  "/images/sofa-set-1.jpg",
  "/images/console-5.jpg",
  "/images/wardrobe-4.jpg",
  "/images/console-2.jpg",
  "/images/sofa-set-5.jpg",
];
const BEDROOM = [
  "/images/bed-4.jpg",
  "/images/bed-1.jpg",
  "/images/bed-2.jpg",
  "/images/bed-3.jpg",
  "/images/bed-1.jpg",
  "/images/bed-5.jpg",
];
const DINING = [
  "/images/dining-8-3.jpg",
  "/images/dining-table-6.jpg",
  "/images/dining-8-5.jpg",
  "/images/dining-table-5.jpg",
  "/images/dining-table-7.jpg",
  "/images/wardrobe-2.jpg",
];
const OFFICE = [
  "/images/dining-table-1.jpg",
  "/images/office-desk-2.jpg",
  "/images/office-desk-3.jpg",
  "/images/office-desk-4.jpg",
  "/images/office-desk-5.jpg",
  "/images/kids-table-1.jpg",
];
const STORAGE = [
  "/images/wardrobe-1.jpg",
  "/images/wardrobe-4.jpg",
  "/images/wardrobe-1.jpg",
];
const OUTDOOR = [
  "/images/garden-lounge-1.jpg",
  "/images/garden-lounge-2.jpg",
];

function pickImages(primary: string, pool: string[], count: number): string[] {
  const others = pool.filter((u: string) => u !== primary);
  const needed = Math.max(0, count - 1);
  return [primary, ...others.slice(0, needed)];
}

export const furnitureItems = [
  item("royal-sheesham-dining-table", "Royal Sheesham Dining Table", "Dining", DINING[0], pickImages(DINING[0], DINING, 7)),
  item("premium-teak-sofa-set", "Premium Teak Sofa Set", "Living Room", LIVING[5], pickImages(LIVING[5], LIVING, 6)),
  item("king-size-bed-with-storage", "King Size Bed with Storage", "Bedroom", BEDROOM[0], pickImages(BEDROOM[0], BEDROOM, 6)),
  item("executive-office-desk", "Executive Office Desk", "Office", OFFICE[0], pickImages(OFFICE[0], OFFICE, 5)),
  item("garden-lounge-set", "Garden Lounge Set", "Outdoor", OUTDOOR[0], pickImages(OUTDOOR[0], OUTDOOR, 4)),
  item("sliding-door-wardrobe", "Sliding Door Wardrobe", "Storage", STORAGE[0], pickImages(STORAGE[0], STORAGE, 4)),
  item("live-edge-coffee-table", "Live Edge Coffee Table", "Living Room", LIVING[6], pickImages(LIVING[6], LIVING, 5)),
  item("ergonomic-office-chair", "Ergonomic Office Chair", "Office", OFFICE[1], pickImages(OFFICE[1], OFFICE, 4)),
  item("8-seater-dining-set", "8-Seater Dining Set", "Dining", DINING[1], pickImages(DINING[1], DINING, 6)),
  item("tv-unit-with-bookshelf", "TV Unit with Bookshelf", "Living Room", LIVING[7], pickImages(LIVING[7], LIVING, 4)),
  item("patio-dining-set", "Patio Dining Set", "Outdoor", OUTDOOR[1], pickImages(OUTDOOR[1], OUTDOOR, 4)),
  item("bedside-table-set", "Bedside Table Set", "Bedroom", BEDROOM[1], pickImages(BEDROOM[1], BEDROOM, 4)),
  item("study-desk-with-storage", "Study Desk with Storage", "Office", OFFICE[2], pickImages(OFFICE[2], OFFICE, 5)),
  item("kids-bunk-bed", "Kids Bunk Bed", "Kids Room", BEDROOM[2], pickImages(BEDROOM[2], BEDROOM, 4)),
  item("bookshelf-library-unit", "Bookshelf Library Unit", "Storage", STORAGE[1], pickImages(STORAGE[1], STORAGE, 4)),
  item("kids-study-table", "Kids Study Table", "Kids Room", BEDROOM[3], pickImages(BEDROOM[3], BEDROOM, 4)),
  item("shoe-rack-cabinet", "Shoe Rack Cabinet", "Storage", STORAGE[0], pickImages(STORAGE[0], STORAGE, 4)),
  item("accent-console-table", "Accent Console Table", "Living Room", LIVING[8], pickImages(LIVING[8], LIVING, 5)),
];

function item(
  slug: string,
  name: string,
  category: string,
  image: string,
  additionalImages: string[]
) {
  return {
    slug, name, category, image, additionalImages,
    shortDescription: "Premium handcrafted " + name.toLowerCase() + " with quality materials and elegant design.",
    fullDescription: "Discover the " + name + " — a beautiful blend of craftsmanship, quality materials, and timeless design. Built by skilled artisans using premium techniques, this piece is made to last and bring joy to your home for years to come.",
    material: "Premium Quality Materials",
    woodType: category === "Office" || category === "Kids Room" ? "Engineered / Solid Wood" : "Solid Hardwood",
    fabricType: "N/A",
    finishType: "Premium Satin Finish",
    color: "Natural Wood Tones",
    style: "Modern Luxury",
    roomType: category,
    length: 'Standard (customizable)',
    width: 'Standard (customizable)',
    height: 'Standard (customizable)',
    weight: "Varies by size",
    rating: 4.7,
    reviews: 30,
    dimensions: "Customizable per order",
    designStyle: "Modern",
    finish: "Premium Satin Finish",
    customization: ["Size", "Wood Type", "Finish Color", "Fabric"],
    seatingCapacity: category.includes("Room") ? "Standard" : "As per design",
    features: [
      "Handcrafted by skilled artisans",
      "Premium quality materials",
      "Durable construction",
      "Customizable options available",
    ],
    careInstructions: [
      "Dust regularly with a soft, dry cloth",
      "Avoid direct sunlight exposure",
      "Use coasters and mats to protect surface",
      "Apply polish every 6 months",
    ],
  };
}

export function getFurnitureBySlug(slug: string) {
  return furnitureItems.find((item) => item.slug === slug);
}

export function getFurnitureByCategory(category: string) {
  if (category === "All") return furnitureItems;
  return furnitureItems.filter((item) => item.category === category);
}

