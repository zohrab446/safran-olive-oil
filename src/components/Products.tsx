import ProductCard from "./ProductCard";
import oliveOilImg from "@/assets/olive-oil.jpg";
import saffronImg from "@/assets/saffron.jpg";
import heaterImg from "@/assets/heater.jpg";

const products = [
  {
    id: 1,
    image: oliveOilImg,
    title: "Naturel Sızma Zeytinyağı",
    description: "Ege'nin bereketli topraklarından, soğuk sıkım yöntemiyle elde edilmiş premium zeytinyağı.",
    price: "₺450",
    category: 'olive' as const,
  },
  {
    id: 2,
    image: oliveOilImg,
    title: "Erken Hasat Zeytinyağı",
    description: "Henüz olgunlaşmamış zeytinlerden elde edilen, yoğun aromalı özel üretim.",
    price: "₺650",
    category: 'olive' as const,
  },
  {
    id: 3,
    image: saffronImg,
    title: "İran Safranı - 1gr",
    description: "Dünyanın en kaliteli safranı. Yemeklerinize eşsiz renk ve lezzet katar.",
    price: "₺180",
    category: 'saffron' as const,
  },
  {
    id: 4,
    image: saffronImg,
    title: "Premium Safran - 5gr",
    description: "Restoran ve profesyonel kullanım için ideal paket. Sertifikalı orijinal ürün.",
    price: "₺800",
    category: 'saffron' as const,
  },
  {
    id: 5,
    image: heaterImg,
    title: "Panel Isıtıcı 1500W",
    description: "Enerji tasarruflu, sessiz çalışan modern panel ısıtıcı. 20m² alanı ısıtır.",
    price: "₺2.500",
    category: 'heater' as const,
  },
  {
    id: 6,
    image: heaterImg,
    title: "Infrared Isıtıcı 2000W",
    description: "Anında ısınma teknolojisi. Uzaktan kumandalı, zamanlayıcılı akıllı ısıtıcı.",
    price: "₺3.200",
    category: 'heater' as const,
  },
];

const Products = () => {
  return (
    <section id="urunler" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ürünlerimiz
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kalite ve güven bir arada. Tüm ürünlerimiz özenle seçilmiş ve test edilmiştir.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
