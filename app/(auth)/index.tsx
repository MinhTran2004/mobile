import { Text, View } from "react-native";

interface Props{
    icon: 'thanhcong' | 'thatbai',
    title: string,
}

const Welcome = (props:any) => {
    
    const SelectIconRight = () => {
        switch(props.iconRight){
            case 'thanhcong': return <IconRight />
            case 'thatbai': return 
        }
    }
    
    
    return(
        <View>
            <SelectIconRight />
            <Text>{props.title}</Text>
        </View>

    )
}









