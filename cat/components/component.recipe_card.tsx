// components/component.recipe_card.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

type Recipe = {
  id: string;
  nombre: string;
  link_de_imagen: string;
  calorias: number;
};

type Props = {
  recipe: Recipe;
  onPress?: () => void;
};

export const RecipeCard = ({ recipe, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: recipe.link_de_imagen }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{recipe.nombre}</Text>
        <Text style={styles.calories}>{recipe.calorias} kcal</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 160,
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  calories: {
    fontSize: 14,
    color: '#777',
  },
});
