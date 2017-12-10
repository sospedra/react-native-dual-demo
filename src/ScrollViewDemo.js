import React from 'react'
import { DualScrollView } from 'react-native-dual'
import { Text, View } from 'react-native'
import Scene from './Scene'

export default (props) => (
  <Scene {...props}>
    <DualScrollView top='#16a085' bottom='#1abc9c'>
      <View style={styles.header}>
        <Text style={{ color: '#fff', fontSize: 24 }}>Cool header</Text>
        <Text style={{ color: '#fff' }}>With different background</Text>
      </View>
      {Array(21).fill().map((x, i) => (
        <Text key={i} style={styles.item}>{`Item ${i}`}</Text>
      ))}
    </DualScrollView>
  </Scene>
)

const styles = {
  header: {
    height: 144,
    backgroundColor: '#16a085',
    padding: 16,
    justifyContent: 'center'
  },
  item: {
    height: 48,
    color: '#fff',
    paddingLeft: 16,
    lineHeight: 48
  }
}
