import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  icon: React.ReactElement;
  name: string;
  onPress?: () => void; // Xử lý sự kiện nhấn
}

const ItemProductCategory: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity style={{  alignItems: 'center', gap: 5,  width: '25%' }} onPress={props.onPress}>
            {props.icon}
            <Text style={styles.name}>{props.name}</Text>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
    textAlign: 'center',
}
});

export default ItemProductCategory;
