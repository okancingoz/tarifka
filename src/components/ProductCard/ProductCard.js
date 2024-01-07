import {View, Pressable, Text, Image} from 'react-native';
import React from 'react';
import styles from './ProductCard.styles';

const ProductCard = ({product, onSelect}) => {
  return (
    <Pressable style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{uri: product.strMealThumb}} />
      <Text style={styles.product}>{product.strMeal}</Text>
    </Pressable>
  );
};

export default ProductCard;
