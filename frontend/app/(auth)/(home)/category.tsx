import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import ProductVerticalItem from "@/components/home/ProductVerticalItem";
import ProductService from "@/service/product.service";
import AppHeader from "@/components/AppHeader";

// Define the Product interface
interface Product {
    _id: string;
    image: string;
    name: string;
    idCategory: string;
    price: number;
}

const Category = ({ route, navigation }: any) => {
    const { idCategory } = route.params; // Nhận idCategoryName từ navigation
    const [products, setProducts] = useState<Product[]>([]); // Type the products state as an array of Product objects
    const [isLoading, setIsLoading] = useState(false);

    const fetchProductsByCategory = async () => {
        setIsLoading(true);
        const response = await ProductService.getProductByCategory(idCategory); // Gọi API với idCategoryName
        setProducts(response);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchProductsByCategory();
    }, [idCategory]);

    return (
        <View style={{ flex: 1 }}>
            {/* App Header */}
            <AppHeader
                iconLeft="left"
                title={` ${idCategory}`} // Dynamic category title
                iconRight="none"
                onPressIconLeft={() => navigation.goBack()} // Go back on left icon press
            />
            <View style={styles.container}>


                {/* Danh sách sản phẩm */}
                {isLoading ? (
                    <ActivityIndicator size="large" color="#42bb6a" />
                ) : products.length > 0 ? (
                    <FlatList
                    showsVerticalScrollIndicator={false}
                        data={products}
                        renderItem={({ item }) => (
                            <ProductVerticalItem
                                key={item._id}
                                _id={item._id}
                                image={item.image}
                                name={item.name}
                                idCategory={item.idCategory}
                                price={item.price.toString()} // Convert the number to a string
                            />
                        )}
                        keyExtractor={(item) => item._id}
                    />
                ) : (
                    <Text style={styles.emptyText}>Không có sản phẩm nào</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
    },
    emptyText: {
        fontSize: 16,
        color: "#909090",
        textAlign: "center",
        marginTop: 20,
    },
});

export default Category;
