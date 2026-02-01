
# Kullanışlı Admin Paneli Planı

Mevcut admin panelinizi modern, sidebar tabanlı ve daha kullanıcı dostu bir yapıya dönüştüreceğim.

## Ne Yapılacak?

### 1. Sidebar ile Navigasyon
- Sol tarafta sabit menü ile kolay gezinme
- Mobilde hamburger menü ile açılıp kapanabilir
- Dashboard, Ürünler, Ayarlar gibi bölümler

### 2. Dashboard Ana Sayfa
- Toplam ürün sayısı, aktif/pasif ürünler
- Kategori bazlı ürün dağılımı (zeytinyağı, safran, ısıtıcı)
- Hızlı istatistik kartları

### 3. Gelişmiş Ürün Yönetimi
- Kategori bazlı filtreleme
- Arama fonksiyonu
- Ürün görsellerinin önizlemesi tabloda
- Toplu işlem desteği (hızlı aktif/pasif yapma)
- Daha büyük ve rahat düzenleme formu

### 4. Modern Tasarım
- Daha geniş çalışma alanı
- Koyu/açık tema desteği
- Mobil uyumlu responsive tasarım

---

## Teknik Detaylar

### Dosya Yapısı

```text
src/
├── pages/
│   └── admin/
│       ├── AdminLayout.tsx      (Sidebar + ana yapı)
│       ├── AdminDashboard.tsx   (Ana sayfa istatistikler)
│       └── AdminProducts.tsx    (Ürün yönetimi)
├── components/
│   └── admin/
│       ├── AdminSidebar.tsx     (Sol menü)
│       ├── ProductForm.tsx      (Ürün ekleme/düzenleme)
│       └── ProductFilters.tsx   (Arama ve filtreleme)
└── App.tsx                      (Yeni rotalar)
```

### Rotalar
- `/admin` - Dashboard (istatistikler)
- `/admin/products` - Ürün yönetimi

### Bileşenler

**AdminLayout**: Tüm admin sayfalarını saran layout
- SidebarProvider ile sidebar yönetimi
- Header: Logo, kullanıcı bilgisi, çıkış butonu
- İçerik alanı: Outlet ile sayfa render

**AdminSidebar**: Sol menü
- Dashboard linki
- Ürünler linki
- Ana siteye dön linki
- Aktif sayfa vurgulaması

**AdminDashboard**: İstatistik kartları
- Toplam ürün sayısı
- Aktif ürün sayısı
- Pasif ürün sayısı
- Kategori dağılımı

**AdminProducts**: Ürün tablosu
- Arama kutusu
- Kategori filtresi
- Ürün listesi (görsel ile)
- Ekle/Düzenle/Sil işlemleri
- Hızlı durum değiştirme

**ProductForm**: Dialog içinde form
- Mevcut form yapısı korunacak
- Görsel önizleme eklenecek
