import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Product {
  id: string;
  title: string;
  description: string | null;
  price: number;
  category: 'olive' | 'saffron' | 'heater';
  image_url: string | null;
  is_active: boolean;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      
      if (error) {
        setError('Ürünler yüklenirken bir hata oluştu');
        console.error('Error fetching products:', error);
      } else {
        setProducts(data as Product[] || []);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return { products, isLoading, error };
};
