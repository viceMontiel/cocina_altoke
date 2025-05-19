import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigation.stacknav';
import { Screen } from '../components/component.screen';
import { SearchRecipe } from '../components/component.search_recipe';
import { RecipeList } from '../components/component.recipe_list';
import recipesData from '../lib/recipes.json';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'RecipesExplorer'>;

type Recipe = {
  id: string;
  nombre: string;
  link_de_imagen: string;
  ingredientes: string[];
  preparacion: string;
  calorias: number;
  categoria: string;
};

const RecipesExplorer = () => {
  const navigation = useNavigation<NavigationProp>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    const transformed = recipesData.map((item, index) => ({
      id: String(index + 1),
      nombre: item.nombre,
      link_de_imagen: item.link_de_imagen,
      ingredientes: item.ingredientes.map((i: number | string) => String(i)),
      preparacion: item["preparación"],
      calorias: item.calorias,
      categoria: item.categoria,
    }));

    setRecipes(transformed);
  }, []);

  // Filtrado dinámico por categoría y texto
  const filteredRecipes = recipes.filter((recipe) => {
    const matchCategory = selectedCategory === 'Todos' || recipe.categoria.toLowerCase() === selectedCategory.toLowerCase();
    const matchText = recipe.nombre.toLowerCase().includes(searchText.toLowerCase());
    return matchCategory && matchText;
  });

  return (
    <Screen>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Explorar Recetas</Text>
        <View style={{ width: 24 }} />
      </View>

      <SearchRecipe
        searchText={searchText}
        onSearchTextChange={setSearchText}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <RecipeList
        recipes={filteredRecipes}
        onSelect={(recipe) => navigation.navigate('RecipeScreen', { recipe })}
      />

    </Screen>
  );
};

export default RecipesExplorer;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
});
