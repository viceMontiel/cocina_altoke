import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const carouselWidth = screenWidth - 32; // 16 padding por lado

const tips = [
  "Toma al menos 2 litros de agua al día.",
  "Incluye frutas y verduras en todas tus comidas.",
  "Evita alimentos ultraprocesados con exceso de azúcar o sodio.",
  "No saltes el desayuno, es la comida más importante del día.",
  "Lee las etiquetas de los alimentos antes de comprarlos.",
];

export const HomeCarousel = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % tips.length;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, 8000); // 5 segundos por recomendación

    return () => clearInterval(interval);
  }, [currentIndex]);

  const onMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / carouselWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={tips}
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        onMomentumScrollEnd={onMomentumScrollEnd}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
      <View style={styles.dotsContainer}>
        {tips.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentIndex ? styles.dotActive : styles.dotInactive]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    marginBottom: 20,
  },
  card: {
    width: carouselWidth,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 25,

  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    backgroundColor: '#CDE4D3',
    padding: 20,
    borderRadius: 15,
    elevation: 2, // sombra Android
    shadowColor: '#000', // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 120
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#68b984',
  },
  dotInactive: {
    backgroundColor: '#ccc',
  },
});
