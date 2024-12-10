import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import CoffeeCard from '../components/CoffeeCard';

const CoffeeMenuScreen = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      const coffeeMenu = [
        { 
          id: '1', 
          name: 'Espresso', 
          price: '15000', 
          description: 'Kopi hitam pekat dengan aroma khas.', 
          image: require('../assets/images/es.jpg'),
        },
        { 
          id: '2', 
          name: 'Latte', 
          price: '25000', 
          description: 'Kombinasi espresso dan susu yang creamy.', 
          image: require('../assets/images/ess.jpg'),
        },
        { 
          id: '3', 
          name: 'Cappuccino', 
          price: '30000', 
          description: 'Espresso dengan susu berbusa di atasnya.', 
          image: require('../assets/images/esss.jpg'),
        },
        { 
          id: '4', 
          name: 'Americano', 
          price: '20000', 
          description: 'Espresso yang dicampur air panas.', 
          image: require('../assets/images/essss.jpg'),
        },
      ];
      setTimeout(() => {
        setMenu(coffeeMenu);
        setLoading(false);
      }, 1500);
    };

    fetchMenu();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/Background.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Daftar Menu Kopi</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />
        ) : (
          <FlatList
            data={menu}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CoffeeCard 
                name={item.name} 
                price={item.price} 
                description={item.description} 
                image={item.image}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparan untuk kontras dengan background
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  loader: {
    marginTop: 50,
  },
});

export default CoffeeMenuScreen;
