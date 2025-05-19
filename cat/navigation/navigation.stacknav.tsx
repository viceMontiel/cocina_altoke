// navigation/StackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/screen.home';
import RecipesExplorer from '../screens/screen.recipe_explorer';
import { GenerateRecipesScreen } from '../screens/screen.generate_recipe';
import { IngredientSelectorScreen } from '../screens/screen.ingridient_selector'; // <-- Usa la screen correcta
import RecipeScreen from '../screens/screen.recipe';

export type Recipe = {
  id: string;
  nombre: string;
  link_de_imagen: string;
  ingredientes: string[];
  preparacion: string;
  calorias: number;
  categoria: string;
  // Puedes agregar más campos si tienes nutrientes, vitaminas, etc.
};


export type RootStackParamList = {
  Home: undefined;
  RecipesExplorer: undefined;
  IngredientSelector: undefined;
  GenerateRecipes: { ingredients: number[] }; // recibe ingredientes
  RecipeScreen: { recipe: Recipe };

};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RecipesExplorer" component={RecipesExplorer} />
      <Stack.Screen name="GenerateRecipes" component={GenerateRecipesScreen} />
      <Stack.Screen name="IngredientSelector" component={IngredientSelectorScreen} />
      <Stack.Screen name="RecipeScreen" component={RecipeScreen} />

    </Stack.Navigator>
  );
};

export default StackNavigator;
