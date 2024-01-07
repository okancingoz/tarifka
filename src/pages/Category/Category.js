import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import styles from './Category.styles';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/CategoryCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Category = ({navigation}) => {
  const {data, loading, error} = useFetch(Config.API_URL_CATEGORIES);

  const handleOnSelect = category => {
    navigation.navigate('Product', category);
  };

  const renderCategory = ({item}) => (
    <CategoryCard category={item} onSelect={() => handleOnSelect(item)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={'2'}
        data={data.categories}
        renderItem={renderCategory}
      />
    </View>
  );
};

export default Category;
