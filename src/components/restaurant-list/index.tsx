import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { RestaurantProps } from '../restaurants';
import { ListItem } from './list';

export function VerticalList() {
 
    const[restaurants, setRestaurants ] = useState<RestaurantProps[]>([])

    useEffect( () =>{
        async function getFoods() {
            const response = await fetch("http://192.168.0.11:3000/restaurants");
            const data = await response.json()
            setRestaurants(data)
        }
        getFoods();
    }, [] )
 
    return (
   <View className='px-4 flex-1 w-full h-full mb-11 flex-col gap-3'>
        {restaurants.map ( item => (
            <ListItem item={item} key={item.id}/>
        ))}
   </View>
  );
}
