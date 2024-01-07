import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './Product.styles';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';

const Product = ({navigation, route}) => {
  const {strCategory} = route.params;
  const {data} = useFetch(`${Config.API_URL_PRODUCTS}=${strCategory}`);

  const handleOnSelect = meal => {
    navigation.navigate('Detail', meal);
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleOnSelect(item)} />
  );

  return (
    <View>
      <FlatList numColumns={2} data={data.meals} renderItem={renderProduct} />
    </View>
  );
};

export default Product;
