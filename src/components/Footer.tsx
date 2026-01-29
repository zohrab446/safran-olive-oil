const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Lezzet<span className="text-primary">Dükkan</span>
            </h3>
            <p className="text-background/70 text-sm">
              Doğanın en saf lezzetlerini sofranıza taşıyoruz. Premium zeytinyağı, safran ve kaliteli ısıtma çözümleri.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#urunler" className="text-background/70 hover:text-background transition-colors">
                  Ürünler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="text-background/70 hover:text-background transition-colors">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Hakkımızda
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Yasal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Kullanım Koşulları
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  İade Politikası
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>© 2025 LezzetDükkan. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
