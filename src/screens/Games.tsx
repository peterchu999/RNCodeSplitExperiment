import React, {PureComponent} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import {Finger} from '@components/games';
import {MoveFinger} from '@utils/games';

export default class Games extends PureComponent {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={{
          1: {position: [40, 200], renderer: <Finger />}, //-- Notice that each entity has a unique id (required)
          2: {position: [100, 200], renderer: <Finger />}, //-- and a renderer property (optional). If no renderer
          3: {position: [160, 200], renderer: <Finger />}, //-- is supplied with the entity - it won't get displayed.
          4: {position: [220, 200], renderer: <Finger />},
          5: {position: [280, 200], renderer: <Finger />},
        }}>
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
