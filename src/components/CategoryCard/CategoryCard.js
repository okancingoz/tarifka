import {Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './CategoryCard.styles';

const CategoryCard = ({category, onSelect}) => {
  return (
    <Pressable style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
      <Text style={styles.category}>{category.strCategory}</Text>
    </Pressable>
  );
};

export default CategoryCard;
