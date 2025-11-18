import { DATA } from '@/constants/DummyData';
import { Image, StyleSheet, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const UsingSafeAreas = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList 
        data={DATA}
        renderItem={({item}) => {
          return(
            <View style={styles.itemContainer}>
              <Image style={styles.image} source={{uri: item?.thumbnail}} />
              <View style={styles.detailContainer}>
                <View style={styles.nameContainer}>
                  <Text style={styles.title}>Name: </Text>
                  <Text style={styles.value} numberOfLines={2}>{item.title}</Text>
                </View>
                <View style={styles.nameContainer}>
                  <Text style={styles.title}>Price$: </Text>
                  <Text style={styles.value} numberOfLines={1}>{item.price}</Text>
                </View>
              </View>
            </View>
          )}
        } 
      />
    </SafeAreaView>
  );
}
export default UsingSafeAreas;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#c2e4ea'
  },
  itemContainer: {
    flexDirection: 'row', 
    padding: 10
  },
  image: {
    height: 100, 
    width: 100
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  nameContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    fontWeight: '400',
  }
});