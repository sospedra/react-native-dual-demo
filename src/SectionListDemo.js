import React from 'react'
import { DualSectionList } from 'react-native-dual'
import { Text, View } from 'react-native'
import Scene from './Scene'

export default (props) => (
  <Scene {...props}>
    <DualSectionList top='#c0392b' bottom='#e74c3c'
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({ section }) => <View style={{ backgroundColor: '#c0392b' }}>
        <Text style={styles.item}>Section Header {section.title}</Text>
      </View>}
      sections={[
        {data: Array(7).fill().map((x, key) => key ), title: 'A'},
        {data: Array(7).fill().map((x, key) => key ), title: 'B'},
        {data: Array(7).fill().map((x, key) => key ), title: 'C'},
      ]}
    />
  </Scene>
)

const styles = {
  item: {
    height: 48,
    color: '#fff',
    paddingLeft: 16,
    lineHeight: 48
  },
  header: {
    backgroundColor: '#c0392b'
  }
}
