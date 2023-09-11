import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LineChart} from 'react-native-chart-kit';
const Graph = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [datas, setData] = useState([]);
  console.log('====================================');
  console.log(datas);
  console.log('====================================');
  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <View style={{flex: 1}}>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: 'red',
          backgroundGradientTo: 'black',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '4',
            strokeWidth: '4',
            stroke: 'green',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <View style={{padding: 24, flex: 1}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={datas}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Graph;
