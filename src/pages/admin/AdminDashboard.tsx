import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, CheckCircle, XCircle, Loader2 } from 'lucide-react';

interface Stats {
  total: number;
  active: number;
  inactive: number;
  byCategory: Record<string, number>;
}

const categoryLabels: Record<string, string> = {
  olive: 'Zeytinyağı',
  saffron: 'Safran',
  heater: 'Isıtıcı',
};

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const { data, error } = await supabase.from('products').select('*');

      if (error) {
        console.error('Error fetching stats:', error);
        setIsLoading(false);
        return;
      }

      const products = data || [];
      const byCategory: Record<string, number> = {};

      products.forEach((p) => {
        byCategory[p.category] = (byCategory[p.category] || 0) + 1;
      });

      setStats({
        total: products.length,
        active: products.filter((p) => p.is_active).length,
        inactive: products.filter((p) => !p.is_active).length,
        byCategory,
      });
      setIsLoading(false);
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="text-center text-muted-foreground py-8">
        İstatistikler yüklenemedi
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-muted-foreground">Mağaza istatistikleriniz</p>
      </div>

      {/* Ana İstatistikler */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Toplam Ürün</CardTitle>
            <Package className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Aktif Ürün</CardTitle>
            <CheckCircle className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{stats.active}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pasif Ürün</CardTitle>
            <XCircle className="w-4 h-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">{stats.inactive}</div>
          </CardContent>
        </Card>
      </div>

      {/* Kategori Dağılımı */}
      <Card>
        <CardHeader>
          <CardTitle>Kategori Dağılımı</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <div
                key={key}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
              >
                <span className="font-medium">{label}</span>
                <span className="text-2xl font-bold">
                  {stats.byCategory[key] || 0}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
