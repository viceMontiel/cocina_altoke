// screens/GenerateRecipesScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { IngredientSelector } from './screen.ingridient_selector';
import recipesData from '../lib/recipes.json';

export const GenerateRecipesScreen = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<number[]>([]);
  const [matchingRecipes, setMatchingRecipes] = useState<typeof recipesData>([]);

  const handleGenerate = () => {
    const filtered = recipesData.filter(recipe =>
      recipe.ingredientes.every((id: number) => selectedIngredients.includes(id))
    );
    setMatchingRecipes(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona ingredientes:</Text>
      <IngredientSelector onSelectionChange={setSelectedIngredients} />
      
      <TouchableOpacity style={styles.button} onPress={handleGenerate}>
        <Text style={styles.buttonText}>Generar Recetas</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Recetas encontradas:</Text>
      <FlatList
        data={matchingRecipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.recipeCard}>
            <Text style={styles.recipeTitle}>{item.nombre}</Text>
            <Text style={styles.recipeText}>{item.preparación}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginVertical: 10 },
  button: {
    backgroundColor: '#68b984',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  recipeCard: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
    borderRadius: 10,
  },
  recipeTitle: { fontSize: 16, fontWeight: 'bold' },
  recipeText: { fontSize: 14 },
});
