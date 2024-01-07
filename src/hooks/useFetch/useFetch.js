import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const {data} = await axios.get(url);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };



  return {data,error,loading};
};

export default useFetch;
