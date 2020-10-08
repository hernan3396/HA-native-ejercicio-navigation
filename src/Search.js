import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  TextInput,
  FlatList,
  Keyboard,
  useWindowDimensions,
} from "react-native";
import ButtonLink from "./ButtonLink";
import Axios from "axios";
import Movie from "./Movie";

export default function Main() {
  const { width } = useWindowDimensions();
  const numberOfColumns = Math.floor(width / 170);
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    Keyboard.dismiss();
    const response = await Axios.get(
      `http://www.omdbapi.com/?s=${name}&apikey=93064b0b`
    );

    setMovies(response.data.Search);
  };
  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <TextInput
          placeholder="Enter a movie name"
          style={styles.textInput}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <ButtonLink title="Search" onPress={handleSearch} />
      </View>
      <View style={styles.content}>
        <FlatList
          key={numberOfColumns}
          numColumns={numberOfColumns}
          data={movies}
          renderItem={({ item }) => <Movie movie={item} />}
          keyExtractor={(item) => item.imdbID}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#141414",
  },
  textInput: {
    height: 40,
    width: 200,
    borderRadius: 20,
    borderWidth: 2,
    paddingHorizontal: 20,
    backgroundColor: "antiquewhite",
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  content: {
    flex: 1,
    height: 400,
  },
  list: {
    alignItems: "center",
  },
});
