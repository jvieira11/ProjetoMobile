import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
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

  // Filtrar pelo nome digitado
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

  // carregando
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#e63946" />
      </View>
    );
  }

  // erro
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

      <SearchBar value={search} onChangeText={setSearch} />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <PokemonCard
            name={item.name}
            url={item.url}
            onPress={() =>
              navigation.navigate("Details", {
                name: item.name,
                url: item.url,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
