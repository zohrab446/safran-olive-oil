import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Doğanın <span className="text-gradient-warm">En Saf</span> Lezzetleri
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Premium zeytinyağı, safran ve kaliteli ısıtma çözümleri ile yaşam kalitenizi artırın
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#urunler" 
            className="bg-gradient-warm text-primary-foreground px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-card"
          >
            Ürünleri Keşfet
          </a>
          <a 
            href="#iletisim" 
            className="bg-card text-foreground px-8 py-4 rounded-lg font-medium border border-border hover:bg-muted transition-colors shadow-soft"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
