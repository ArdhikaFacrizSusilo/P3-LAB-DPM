import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';

const CoffeeCard = ({ name, price, description, image }) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>Rp {price}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderRadius: 8,
    elevation: 2,
  },
  content: {
    flexDirection: 'row', // Menyusun gambar dan teks secara horizontal
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15, // Jarak antara gambar dan teks
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#6b6b6b',
    marginTop: 5,
  },
  price: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});

export default CoffeeCard;
