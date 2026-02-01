import ProductCard from "./ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { Loader2 } from "lucide-react";
import oliveOilImg from "@/assets/olive-oil.jpg";
import saffronImg from "@/assets/saffron.jpg";
import heaterImg from "@/assets/heater.jpg";

const defaultImages: Record<string, string> = {
  olive: oliveOilImg,
  saffron: saffronImg,
  heater: heaterImg,
};

const Products = () => {
  const { products, isLoading, error } = useProducts();

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
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center py-12 text-muted-foreground">
            {error}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            Henüz ürün bulunmamaktadır
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard 
                  image={product.image_url || defaultImages[product.category] || oliveOilImg}
                  title={product.title}
                  description={product.description || ''}
                  price={`₺${product.price.toLocaleString('tr-TR')}`}
                  category={product.category}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
