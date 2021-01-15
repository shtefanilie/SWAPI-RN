// @flow

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Button,
} from 'react-native';

// REDUX
import { selectLoadingPeople } from '../../modules/people/selectors';
import { getPeople, getPeopleCount } from '../../actions/people';
import {
  selectPeople,
  selectPeopleCount,
} from '../../modules/people/selectors';
import { connect } from 'react-redux';

// COMPONENTS
import { Character } from '../../components/character';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// TYPES
import type { People, PeopleCount } from '../../modules/people/types';
import { generateRandomId } from '../../modules/people/utils';

const HomeViewComponent = ({
  people,
  peopleCount,
  loadingPeople,
  getPeopleCount,
  getPeople,
}: {
  people: People,
  peopleCount: number,
  loadingPeople: boolean,
  getPeopleCount: Function,
  getPeople: Function,
}): React$Node => {
  const fetchCharacter = async () => {
    if (!peopleCount) {
      await getPeopleCount();
    }

    const personId = generateRandomId(peopleCount);
    await getPeople(personId);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.body}>
            {people && <Character character={people} />}
            <Button
              onPress={fetchCharacter}
              // TODO: add isLoading state
              disabled={loadingPeople}
              title={'Get random character'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: 'blue',
    borderWidth: 1,
  },
});

const mapsStateToProps = (state) => ({
  people: selectPeople(state),
  peopleCount: selectPeopleCount(state),
  loadingPeople: selectLoadingPeople(state),
});

const mapDispatchToProps = {
  getPeopleCount,
  getPeople,
};

export const HomeView = (connect(
  mapsStateToProps,
  mapDispatchToProps,
)(HomeViewComponent): React$Node);
