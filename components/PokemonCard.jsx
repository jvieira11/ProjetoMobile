import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function PokemonCard({
  id,
  name,
  image,
  isFavorite,
  onPress,
  onToggleFavorite,
  style
}) {
  return (
    <TouchableOpacity 
      style={[styles.card, style]}
      onPress={() => onPress && onPress(id)}
      activeOpacity={0.8}
    >
    
      <Image source={{ uri: image }} style={styles.image} />

      
      <Text style={styles.name}>{name}</Text>

      
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => onToggleFavorite && onToggleFavorite(id)}
      >
        <Text style={styles.favoriteIcon}>
          {isFavorite ? "❤️" : "🤍"}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 14,
    marginBottom: 14,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3, // leve sombra Android
    shadowColor: "#000", // leve sombra iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    position: "relative"
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: "contain"
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textTransform: "capitalize",
    marginBottom: 8
  },

  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10
  },

  favoriteIcon: {
    fontSize: 24
  }
});
