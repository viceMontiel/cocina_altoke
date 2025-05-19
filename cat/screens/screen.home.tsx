// screens/screen.home.tsx
import React from 'react';
import {  Text,  StyleSheet, ScrollView } from 'react-native';
import HomeHeader from '../components/Home/component.home_header';
import { Screen } from '../components/component.screen';
import { HomeButton } from '../components/Home/component.home_button';
import { HomeCarousel } from '../components/Home/component.home_carousel';

const Home = () => {
  return (
      <Screen>
        <HomeHeader/>
        <ScrollView>
            <HomeCarousel />

            <Text style={styles.subtitle}>¿Qué quieres cocinar hoy?</Text>
        
            <HomeButton
              screenName="IngredientSelector"
              iconName="restaurant-outline"
              text="Generar recetas con lo que tengo"
            />
            <HomeButton
              screenName="RecipesExplorer"
              iconName="book-outline"
              text="Explorar recetas"
            />
            <HomeButton
              screenName="IngredientSelector"
              iconName="heart-outline"
              text="Ver favoritos"
            />
        </ScrollView>
        
      </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  
  subtitle: {
    fontSize: 20, fontWeight: '600', marginBottom: 30,
    color: '#333',
  }
});
