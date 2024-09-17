import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CATEGORIES = [
  { id: '1', title: 'Trà Thạch Đào', image: require('../assets/anh2.png') },
  { id: '2', title: 'Trà Thạch Vải', image: require('../assets/anh3.png') },
  { id: '3', title: 'Phindi Cà Phê', image: require('../assets/anh4.png') },
  { id: '4', title: 'Trà Sen Vàng', image: require('../assets/anh5.png') },
  { id: '5', title: 'Freeze Trà Xanh', image: require('../assets/anh6.png') },
  { id: '6', title: 'Trà Hạt Lựu', image: require('../assets/anh7.png') },
  { id: '7', title: 'Bạc xỉu', image: require('../assets/anh8.png') },
];

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    return (
      <TouchableOpacity 
        style={styles.gridItem} 
        onPress={() => navigation.navigate('Meals', { categoryId: itemData.item.id })}
      >
        <View>
          <Image source={itemData.item.image} style={styles.image} />
          <Text style={styles.title}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList 
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '72%',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default CategoriesScreen;
