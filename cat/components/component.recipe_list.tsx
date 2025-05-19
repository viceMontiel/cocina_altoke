// components/component.recipe_list.tsx
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { RecipeCard } from './component.recipe_card';

type Recipe = {
  id: string;
  nombre: string;
  link_de_imagen: string;
  ingredientes: string[];
  preparacion: string;
  calorias: number;
  categoria: string; // agrégalo si no estaba
};

type Props = {
  recipes: Recipe[];
  onSelect?: (recipe: Recipe) => void;
};

export const RecipeList = ({ recipes, onSelect }: Props) => {
  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => (
        <RecipeCard
          recipe={item}
          onPress={() => onSelect?.(item)}
        />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingBottom: 20,
  },
});
