import React from 'react'
import { DualListView } from 'react-native-dual'
import { ListView, Text } from 'react-native'
import Scene from './Scene'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

export default class ListViewDemo extends React.Component {
  state = {
    dataSource: ds.cloneWithRows(
      Array(21).fill().map((x, key) => `${key}`)
    )
  }

  render () {
    return (
      <Scene {...this.props}>
        <DualListView top='#8e44ad' style={{ backgroundColor: '#9b59b6' }}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>}
        />
      </Scene>
    )
  }
}

const styles = {
  item: {
    height: 48,
    color: '#fff',
    paddingLeft: 16,
    lineHeight: 48
  }
}
