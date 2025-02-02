import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'
import { IGoodsItemModel } from '@/models/goods'
import { baseGap, basePadding } from '@/constants/Paddings';
import { Link } from 'expo-router';

export interface IProps extends IGoodsItemModel{}

const { height, width } = Dimensions.get('window');

export default function GoodsItemCard({
    name,
    price,
    id,
    image,
    short_description,
}: IProps) {

  return (
    <Link href={{
      pathname: '/product/[id]',
      params: { id: id }
    }}>
        <View style={styles.card}>
            <Image source={{uri: image}} style={styles.image}/>
            <View style={styles.content}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.description}>{short_description}</Text>
              <Text style={styles.price}>{price} ₽</Text>
            </View>
        </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 8,
    width: width / 2 - basePadding - baseGap / 2,
    padding: basePadding,
    justifyContent: 'space-between',

    textAlign: 'left',
    height: 275,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  content: {
    gap: baseGap / 4,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
})