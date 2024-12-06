import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  icon: React.ReactElement;
  name: string;
  onPress?: () => void; // Xử lý sự kiện nhấn
}

const ItemProductCategory: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity 
      onPress={props.onPress} 
      style={styles.container}
      activeOpacity={0.7} 
    >
      {props.icon}
      <Text style={styles.name}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "25%",
    alignItems: "center",
    padding: 10, 
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2C2C2C",
    textAlign: "center",
    marginTop: 8, 
  },
});

export default ItemProductCategory;
