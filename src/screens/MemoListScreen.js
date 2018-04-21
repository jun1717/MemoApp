import React from 'react';
import { View, StyleSheet } from 'react-native';

import MemoList from '../../src/components/MemoList';
import CircleButton from '../../src/elements/CircleButton';

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList
          navigation={this.props.navigation}
        />
        <CircleButton onPress={() => { this.props.navigation.navigate('MemoEdit'); }}>
          {'\uf067'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});

export default MemoListScreen;
