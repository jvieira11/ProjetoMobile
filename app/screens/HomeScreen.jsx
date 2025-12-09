import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet, Text } from "react-native";
import { API_URL } from "../../constants/api";
import useFetch from "../../hooks/useFetch";

import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import PokemonCard from "../../components/PokemonCard";

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const url = `${API_URL}?limit=151`;
  const { data, loading, error } = useFetch(url);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data?.results) {
      setFilteredData(data.results);
    }
  }, [data]);

  useEffect(() => {
    if (!data?.results) return;

    if (search.trim() === "") {
      setFilteredData(data.results);
      return;
    }

    const filtered = data.results.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredData(filtered);
  }, [search]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#e63946" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Erro ao carregar os Pokémons.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <Header title="Pokédex" />

      <SearchBar onSearch={setSearch} />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.name}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => {
          const id = item.url.split("/").filter(Boolean).pop();

          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

          return (
            <PokemonCard
              id={id}
              name={item.name}
              image={image}
              isFavorite={false}
              onPress={() =>
                navigation.navigate("Details", {
                  id,
                  name: item.name,
                  image,
                })
              }
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
