import {View, Text, Image, Pressable, Linking, ScrollView} from 'react-native';
import React from 'react';
import styles from './DetailCard.styles';

const DetailCard = ({data}) => {
  const goToYoutube = () => {
    Linking.openURL(`${data.strYoutube}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: data.strMealThumb}} />
      <View style={styles.headerContainer}>
        <View style={styles.innerHeader}>
          <Text style={styles.meal}>{data.strMeal}</Text>
          <Text style={styles.tags}>{data.strTags}</Text>
        </View>
        <Text style={styles.area}>{data.strArea}</Text>
      </View>
      <Text style={styles.desc}>{data.strInstructions}</Text>
      <Pressable style={styles.btnYoutube} onPress={goToYoutube}>
        <Text style={styles.btnTitle}>Watch On Youtube</Text>
      </Pressable>
    </ScrollView>
  );
};

export default DetailCard;
