import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="iletisim" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            İletişim
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sorularınız veya siparişleriniz için bizimle iletişime geçin
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center text-primary-foreground">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-1">Telefon</h3>
                <p className="text-muted-foreground">+90 (555) 123 45 67</p>
                <p className="text-muted-foreground">+90 (212) 987 65 43</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-olive flex items-center justify-center text-secondary-foreground">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-1">E-posta</h3>
                <p className="text-muted-foreground">info@lezzetdukkan.com</p>
                <p className="text-muted-foreground">siparis@lezzetdukkan.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center text-primary-foreground">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-1">Adres</h3>
                <p className="text-muted-foreground">Zeytin Sokak No: 42</p>
                <p className="text-muted-foreground">Kadıköy, İstanbul</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-olive flex items-center justify-center text-secondary-foreground">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-1">Çalışma Saatleri</h3>
                <p className="text-muted-foreground">Pazartesi - Cumartesi: 09:00 - 18:00</p>
                <p className="text-muted-foreground">Pazar: Kapalı</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-card">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Mesaj Gönderin
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Adınızı girin"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="E-posta adresiniz"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Mesajınızı yazın..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-warm text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-soft"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
