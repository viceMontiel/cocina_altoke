import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Image, TouchableOpacity, View,StyleSheet } from 'react-native';

const  Logo = require('../../assets/Cocina_altoke_2-Photoroom.png')

function HomeHeader() {
  return (
    <View style={styles.header}>
        <Image
            style={styles.logo}
            source={Logo} 
            resizeMode="contain"
        />
        <TouchableOpacity onPress={() => {}}>
            <Ionicons name="settings-outline" size={24} color="#333" />
        </TouchableOpacity>
    </View>
  )
}

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: 5,
  },
  logo: {
    width: 250,
    height: 150,
  }
});