import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../MovieListScreen.styles";

export const MovieCell = ({ movieItem }) => {
  // TODO: Create and return the MovieCell component.
  // HINT: Take a look at the movieCell styles, as well as the video
  // demo in the spec, to figure out what this should look like.
  return (
    <View style = {styles.movieCell}>
      <Image source={{url: movieItem.posterurl}} style={[styles.movieCellLeft, styles.movieCellImage]}/>
      <View style = {styles.container}>
        <Text style={[styles.movieCellRight, styles.movieCellTitle]}/>
        <Text style = {[styles.movieCellRight, styles.movieCellSubtitle]}>{movieItem.actors.join(', ')}</Text>
      </View>
    </View>
  );
};
