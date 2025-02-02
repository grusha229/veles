import { StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { IGoodsItemModel } from '@/models/goods';
import { basePadding } from '@/constants/Paddings';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useLocalSearchParams } from 'expo-router';
import { getProductById } from '@/mocks/fakeApi';
import { useEffect, useState } from 'react';
import { isLoading } from 'expo-font';
import ParallaxScrollView from '@/components/ParallaxScrollView';

type RootStackParamList = {
  ProductDetail: { product: IGoodsItemModel };
};

const { height, width } = Dimensions.get('window');

export default function productDetails() {
  const { id } = useLocalSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<IGoodsItemModel | null>(null);

  // Загрузка данных с задержкой
  const getData = async () => {
    getProductById(id.toString())
      .then((product) => {
        setProduct(product);
      })
      .catch(() => {
        setError('Возникла ошибка загрузки данных');
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  useEffect(() => {
    getData();
  }, [id])


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#ff5733" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ParallaxScrollView
        headerImage={
          <Image
            source={{ uri: product?.image }}
            style={styles.image}
          />
        }>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{product?.name}</Text>
          <Text style={styles.price}>{product?.price} руб</Text>
          <Text style={styles.description}>{product?.description || 'Описание отсутствует'}</Text>
        </View>
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    width: width,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: basePadding,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#ff5733',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    color: '#666',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
});
