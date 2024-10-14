import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';


export function Search() {
 return (
   <View className='w-full flex-row items-center h-14 border border-slate-500 rounded-full gap-2 px-4 bg-transparent'>
    <Feather name='search' size={24} color={'#64748b'} />   

    <TextInput
    placeholder='Procure sua comida favorita..' 
    placeholderTextColor={'#1e293b'}
    className='w-full bg-transparent flex-1 h-full'/>
   </View>
  );
}