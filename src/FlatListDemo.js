import React from 'react'
import { DualFlatList } from 'react-native-dual'
import { Text, View } from 'react-native'
import Scene from './Scene'

export default (props) => (
  <Scene {...props}>
    <DualFlatList
      top='#2980b9'
      bottom='#3498db'
      data={Array(21).fill().map((x, key) => ({ key }))}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      keyExtractor={({ key }) => key}
    />
  </Scene>
)

const styles = {
  item: {
    height: 48,
    color: '#fff',
    paddingLeft: 16,
    lineHeight: 48
  }
}
