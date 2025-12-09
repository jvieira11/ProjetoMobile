import { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { FavoritesContext } from "../context/FavoritesContext";
import PokemonCard from "../../components/PokemonCard";

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);

  return (
    <View style={{ flex: 1, padding: 14 }}>
      {favorites.length === 0 ? (
        <Text style={{ marginTop: 50, textAlign: "center" }}>
          Nenhum Pokémon favoritado ainda.
        </Text>
      ) : (
        <FlatList
          data={favorites}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PokemonCard
              id={item.id}
              name={item.name}
              image={item.image}
              onPress={() =>
                navigation.navigate("Details", {
                  id: item.id,
                  name: item.name,
                  image: item.image,
                })
              }
            />
          )}
        />
      )}
    </View>
  );
}
