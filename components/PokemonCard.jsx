import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FavoritesContext } from "../app/context/FavoritesContext";

export default function PokemonCard({
  id,
  name,
  image,
  onPress,
  style
}) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some((p) => p.id === id);

  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={() => onPress && onPress(id)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.name}>{name}</Text>

      {/* Botão de favorito funcionando com Context */}
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={(e) => {
          e.stopPropagation(); // impede de abrir a tela ao favoritar
          toggleFavorite({ id, name, image });
        }}
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
    elevation: 3,
    shadowColor: "#000",
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
