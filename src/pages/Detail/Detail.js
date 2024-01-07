import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './Detail.styles';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import DetailCard from '../../components/DetailCard';
import Loading from '../../components/Loading';

const Detail = ({route}) => {
  const {idMeal} = route.params;
  const {data} = useFetch(`${Config.API_URL_DETAILS}=${idMeal}`);

  const mealData = data?.meals?.[0];

  if (!mealData) {
    return <Loading />;
  }

  return <DetailCard data={mealData} />;
};

export default Detail;
