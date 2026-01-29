import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-serif text-2xl font-bold text-foreground">
            Lezzet<span className="text-gradient-warm">Dükkan</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#urunler" className="text-muted-foreground hover:text-foreground transition-colors">
              Ürünler
            </a>
            <a href="#iletisim" className="text-muted-foreground hover:text-foreground transition-colors">
              İletişim
            </a>
            <a 
              href="#iletisim" 
              className="bg-gradient-warm text-primary-foreground px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Sipariş Ver
            </a>
          </nav>
          
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a 
                href="#urunler" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ürünler
              </a>
              <a 
                href="#iletisim" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </a>
              <a 
                href="#iletisim" 
                className="bg-gradient-warm text-primary-foreground px-5 py-2 rounded-lg font-medium text-center hover:opacity-90 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Sipariş Ver
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
