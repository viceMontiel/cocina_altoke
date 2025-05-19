import React, { useState } from 'react';
import {
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigation.stacknav';
import { IngredientSelector } from '../components/component.ingredient_selector';
import { Screen } from '../components/component.screen';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'IngredientSelector'>;

export const IngredientSelectorScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedIngredients, setSelectedIngredients] = useState<number[]>([]);

  const handleNext = () => {
    navigation.navigate('GenerateRecipes', {
      ingredients: selectedIngredients,
    });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <IngredientSelector onSelectionChange={setSelectedIngredients} />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button
            title="Generar Receta"
            onPress={handleNext}
            disabled={selectedIngredients.length === 0}
            color={Platform.OS === 'ios' ? undefined : '#68b984'}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  scrollContent: {
    paddingVertical: 16,
  },
  buttonContainer: {
    marginTop: 8,
  },
});
