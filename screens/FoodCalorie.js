import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FoodCalorie = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Pea Soup</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>75 kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Bulgur Rice</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>215 kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Mexican Durum Wheat</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>105 kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Minced Beans</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>330 kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Indian Peas Meal</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>75 kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Pork Chops</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text ><Text style={{fontSize:15,fontWeight:"900"}}>225 kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Enchilada</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>unknown kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Brown Rice</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>unknown kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Fajita</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>unknown kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Fish and Chips</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>unknown kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Baked Beans</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>unknown kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Hand Baked Chicken</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>174 kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Hummus</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>134 kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Hunkar Begendi</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>unknown kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Karniyarik</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>unknown kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Kebab</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>unknown kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Lamb Rice Tanduri</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>unknown kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Roasted Meatloaf Stuffed</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>186 kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Lasagna</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>132 kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Pasta and Cheese</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>370 kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Paella</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>156 kcal</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style={{fontSize:15,fontWeight:"900"}}>Potato Pie</Text><Text style={{fontSize:15,fontWeight:"900"}}>100g</Text><Text style={{fontSize:15,fontWeight:"900"}}>83 kcal</Text>
      </View>

      
      

    
    </View>
  )
}

export default FoodCalorie

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center"

  }
})