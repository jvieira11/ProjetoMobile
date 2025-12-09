import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Carregar favoritos do storage ao iniciar o app
  useEffect(() => {
    async function loadFavorites() {
      const saved = await AsyncStorage.getItem("@favorites");
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    }
    loadFavorites();
  }, []);

  // Salvar favoritos no storage sempre que mudar
  useEffect(() => {
    AsyncStorage.setItem("@favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addFavorite(pokemon) {
    setFavorites((prev) => [...prev, pokemon]);
  }

  function removeFavorite(id) {
    setFavorites((prev) => prev.filter((p) => p.id !== id));
  }

  function toggleFavorite(pokemon) {
    const exists = favorites.some((p) => p.id === pokemon.id);

    if (exists) {
      removeFavorite(pokemon.id);
    } else {
      addFavorite(pokemon);
    }
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
