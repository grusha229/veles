import { SafeAreaView } from 'react-native';
import { useMemo, useState } from 'react';
import { goodsMockData } from '@/mocks/goods.mock';
import { IGoodsItemModel } from '@/models/goods';
import SearchBar from '@/components/SearchBar';
import ProductList from '@/components/ProductList';

export default function GoodsTabScreen() {
  const [search, setSearch] = useState('');
  const [sorted, setSorted] = useState(false);


  /** 
   * В реальном приложении фильтрацию продуктов будет правильнее делать на бэкенде, 
   * передавая в query параметры запроса необходимые данные:
   * - Поиск по названию
   * - Сортировка
   * - Фильтрация товаров по категориям
   * - Пагинация и дозагрузка следующих чанков товаров при прокрутке
   * - итд...
  */
  let filteredProducts = useMemo<IGoodsItemModel[]>(() => {
    return goodsMockData.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  if (sorted) {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 10, display: 'flex', flexDirection: 'column' }}>
      <SearchBar search={search} setSearch={setSearch} sorted={sorted} toggleSort={() => setSorted(!sorted)} />
      <ProductList products={filteredProducts} />
    </SafeAreaView>
  );
} 
