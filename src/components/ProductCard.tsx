interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  category: 'olive' | 'saffron' | 'heater';
}

const ProductCard = ({ image, title, description, price, category }: ProductCardProps) => {
  const categoryColors = {
    olive: 'bg-gradient-olive',
    saffron: 'bg-gradient-warm',
    heater: 'bg-muted',
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute top-4 right-4 ${categoryColors[category]} text-primary-foreground text-xs px-3 py-1 rounded-full font-medium`}>
          {category === 'olive' ? 'Zeytinyağı' : category === 'saffron' ? 'Safran' : 'Isıtıcı'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Sipariş Ver
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
