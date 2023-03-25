import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Card.style";

const Card = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.imgURL }} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.price}>{data.price}</Text>
      {data.inStock === false && <Text style={styles.instock}>Stokta Yok</Text>}
    </View>
  );
};
export default Card;
