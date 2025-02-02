import { FlatList, StyleSheet, Dimensions } from 'react-native';
import GoodsItemCard from '@/components/GoodsItemCard';
import { IGoodsItemModel } from '@/models/goods';
import { basePadding } from '@/constants/Paddings';

const { width } = Dimensions.get('window');

interface ProductListProps {
  products: IGoodsItemModel[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <FlatList
      style={styles.listBlock}
      contentContainerStyle={styles.listContainer}
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <GoodsItemCard {...item} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listBlock: {
    width,
    paddingHorizontal: basePadding,
    flex: 1,
  },
  listContainer: {
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    rowGap: basePadding,
    paddingVertical: basePadding,
  },
});
