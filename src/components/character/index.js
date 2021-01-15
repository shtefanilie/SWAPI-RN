// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// TYPES
import type { People } from '../../modules/people/types';

export const Character = ({ character }: { character: People }): React$Node => {
  const {
    name,
    height,
    mass,
    // skinColor,
    // hairColor,
    // eyeColor,
    // birthYear,
    // gender,
  } = character;
  return (
    <View style={styles.characterContainer}>
      <Text>Name: {name}</Text>
      <Text>Height: {height}</Text>
      <Text>Mass: {mass}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  characterContainer: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
});
