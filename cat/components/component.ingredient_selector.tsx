import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ingredientsData from '../lib/ingridients.json';

interface Ingredient {
  id: number;
  nombre: string;
  link_de_imagen: string;
  carbohidratos: number;
  proteinas: number;
  grasas: number;
  calorias: number;
  vitaminas: string[];
  minerales: string[];
}


interface Props {
  onSelectionChange: (selectedIds: number[]) => void;
}

export const IngredientSelector: React.FC<Props> = ({ onSelectionChange }) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<number[]>([]);

    useEffect(() => {
    setIngredients(ingredientsData); // sin map
    }, []);
  const toggleIngredient = (id: number) => {
    let updated: number[];
    if (selected.includes(id)) {
      updated = selected.filter(item => item !== id);
    } else {
      updated = [...selected, id];
    }
    setSelected(updated);
    onSelectionChange(updated);
  };

  const filtered = ingredients.filter(ingredient =>
    ingredient.nombre.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: { item: Ingredient }) => {
    const isSelected = selected.includes(item.id);
    return (
      <View style={styles.ingredientItem}>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.nombre}</Text>
          <Text style={styles.details}>
            {item.calorias} kcal, {item.proteinas}g proteína
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.button, isSelected && styles.buttonSelected]}
          onPress={() => toggleIngredient(item.id)}
        >
          <Text style={styles.buttonText}>{isSelected ? '-' : '+'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar ingrediente..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#777',
  },
  button: {
    width: 36,
    height: 36,
    backgroundColor: '#68b984',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSelected: {
    backgroundColor: '#ff6b6b',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
