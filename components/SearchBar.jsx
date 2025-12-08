import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function SearchBar({
  onSearch,
  placeholder = "Buscar Pokémon...",
  initialValue = "",
  loading = false,
  style
}) {
  const [text, setText] = useState(initialValue);

  const handleSearch = () => {
    if (!loading && onSearch) {
      onSearch(text.trim());
    }
  };

  return (
    <View style={[styles.container, style]}>
      
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={text}
        onChangeText={setText}
        returnKeyType="search"
        onSubmitEditing={handleSearch} // Pressionar Enter
      />

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleSearch}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <Text style={styles.buttonText}>Buscar</Text>
        )}
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 12,
    marginVertical: 12
  },

  input: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
  },

  button: {
    marginLeft: 8,
    backgroundColor: "#ff3d57",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonDisabled: {
    opacity: 0.6
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  }
});
