import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/navigation.stacknav';
import { Screen } from '../components/component.screen';

type RecipeScreenRouteProp = RouteProp<RootStackParamList, 'RecipeScreen'>;

export const RecipeScreen = () => {
  const route = useRoute<RecipeScreenRouteProp>();
  const navigation = useNavigation();
  const { recipe } = route.params;

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>{recipe.nombre}</Text>
          <View style={{ width: 28 }} /> {/* Espacio simétrico */}
        </View>

        {/* Imagen destacada */}
        <Image source={{ uri: recipe.link_de_imagen }} style={styles.image} />

        {/* Categoría */}
        <View style={styles.chipContainer}>
          <Text style={styles.chip}>{recipe.categoria}</Text>
        </View>

        {/* Información Nutricional */}
        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Información Nutricional</Text>
          <Text style={styles.infoText}>Calorías: {recipe.calorias} kcal</Text>
          {/* Puedes agregar aquí proteínas, grasas, etc. */}
        </View>

        {/* Ingredientes */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Ingredientes</Text>
          {recipe.ingredientes.map((ing, idx) => (
            <Text key={idx} style={styles.bulletText}>
              • {ing}
            </Text>
          ))}
        </View>

        {/* Preparación */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Preparación</Text>
          <Text style={styles.paragraph}>{recipe.preparacion}</Text>
        </View>
      </ScrollView>
    </Screen>
  );
};
export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fdfdfd',
    paddingBottom: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 3,
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 12,
  },
  chip: {
    backgroundColor: '#E0F2F1',
    color: '#00796B',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 14,
    fontWeight: '500',
    overflow: 'hidden',
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  bulletText: {
    fontSize: 15,
    color: '#444',
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  infoText: {
    fontSize: 15,
    color: '#555',
    marginBottom: 4,
  },
});