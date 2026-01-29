import { Leaf, Award, Truck, Shield } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Doğal Ürünler",
    description: "Hiçbir katkı maddesi içermeyen, tamamen doğal ve organik ürünler",
  },
  {
    icon: Award,
    title: "Premium Kalite",
    description: "Uluslararası standartlarda, sertifikalı ve test edilmiş ürünler",
  },
  {
    icon: Truck,
    title: "Hızlı Teslimat",
    description: "Türkiye'nin her yerine 2-3 iş günü içinde güvenli teslimat",
  },
  {
    icon: Shield,
    title: "Güvenli Alışveriş",
    description: "256-bit SSL güvenlik sertifikası ile korunan ödeme altyapısı",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-background shadow-soft hover:shadow-card transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-warm text-primary-foreground mb-4">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
