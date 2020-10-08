import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./src/Header";
import Search from "./src/Search";
import Footer from "./src/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BackButton,
  NativeRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-native";
import Home from "./src/Home";
import Nav from "./src/Nav";
import MovieDetails from "./src/MovieDetails";

export default function App() {
  return (
    <NativeRouter>
      <BackButton>
        <SafeAreaView style={styles.container}>
          <Header />
          <Nav />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/movieDetails/:id" component={MovieDetails} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
          <StatusBar backgroundColor="#E50914" style="light" />
        </SafeAreaView>
      </BackButton>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E50914",
  },
});
