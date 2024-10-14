import { Text, View, ScrollView } from "react-native";

import { Header }  from '../components/header'
import { Banner } from '../components/banner'
import { Search } from '../components/search'
import { Section } from '../components/section'
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { VerticalList } from "../components/restaurant-list";

import Constants from 'expo-constants'

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
    style={{flex:1}}
    className="bg-slate-200"
    showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8}}>

      <Header/>

      <Banner/>

      <Search/>

      <Section
      name="Comidas em Alta"
      size="text-2xl"
      label="Ver mais"
      action={() => console.log("CLICOU NO BOTAO" )}/>

      <TrendingFoods/>
      
      <Section
      name="Restaurantes em Alta"
      size="text-2xl"
      label="Ver mais"
      action={() => console.log("CLICOU NO FAMOSOS" )}/>
      
      <Restaurants/>
      <Section
      name="Restaurantes Abertos"
      size="text-2xl"
      label="Ver mais"
      action={() => console.log("CLICOU NO ABERTOS" )}/>
      
      <VerticalList/>

      </View>
  
    </ScrollView>
  );
}
