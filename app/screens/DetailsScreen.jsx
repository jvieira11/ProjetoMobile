import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView } from "react-native";

export default function DetailsScreen({ route }) {
  const TYPE_COLORS = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  const { id, name, image } = route.params;

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setPokemon(data);
      } catch (e) {
        console.log("Erro ao carregar Pokémon:", e);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#e63946" />
      </View>
    );
  }

  if (!pokemon) {
    return (
      <View style={styles.center}>
        <Text>Erro ao carregar os dados do Pokémon.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        
        <Image source={{ uri: image }} style={styles.image} />

        <Text style={styles.name}>
          {name}{" "}
          <Text style={styles.id}>#{String(id).padStart(3, "0")}</Text>
        </Text>

        <View style={styles.typesContainer}>
          {pokemon.types.map((item) => {
            const type = item.type.name;
            return (
              <View
                key={type}
                style={[styles.typeTag, { backgroundColor: TYPE_COLORS[type] }]}
              >
                <Text style={styles.typeText}>{type}</Text>
              </View>
            );
          })}
        </View>

        <View style={styles.infoBox}>
          <View style={styles.infoColumn}>
            <Text style={styles.infoTitle}>Altura</Text>
            <Text style={styles.infoValue}>{pokemon.height / 10} m</Text>
          </View>

          <View style={styles.infoColumn}>
            <Text style={styles.infoTitle}>Peso</Text>
            <Text style={styles.infoValue}>{pokemon.weight / 10} kg</Text>
          </View>
        </View>

        {/* Stats */}
        <Text style={styles.sectionTitle}>Status</Text>

        {pokemon.stats.map((s) => {
          const value = s.base_stat;

          let barColor = "#e63946";
          if (value > 90) barColor = "#2ecc71";
          else if (value > 50) barColor = "#f1c40f";

          const barWidth = Math.min(value, 100);

          return (
            <View key={s.stat.name} style={styles.statRow}>
              <Text style={styles.statName}>{s.stat.name}</Text>

              <View style={styles.statBar}>
                <View
                  style={[
                    styles.statBarFill,
                    { width: `${barWidth}%`, backgroundColor: barColor },
                  ]}
                />
              </View>

              <Text style={styles.statValue}>{value}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    padding: 20,
    alignItems: "center",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginBottom: 20,
  },

  name: {
    fontSize: 32,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 10,
    color: "#000000ff",
  },

  id: {
    color: "#000000ff",
    fontSize: 22,
  },

  typesContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },

  typeTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },

  typeText: {
    color: "#000000ff",
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  infoBox: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  infoColumn: {
    alignItems: "center",
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  infoValue: {
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
    color: "#000000ff",
  },

  statRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 12,
  },

  statName: {
    width: 110,
    textTransform: "capitalize",
    fontSize: 14,
    color: "#000000ff",
  },

  statBar: {
    flex: 1,
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 8,
    marginHorizontal: 8,
    overflow: "hidden",
  },

  statBarFill: {
    height: "100%",
    borderRadius: 8,
  },

  statValue: {
    width: 40,
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 14,
    color: "#000000ff",
  },
});
