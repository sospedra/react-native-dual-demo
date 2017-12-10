import React, { Component } from 'react'
import { Button, Text, View} from 'react-native'
import FlatListDemo from './FlatListDemo'
import ListViewDemo from './ListViewDemo'
import ScrollViewDemo from './ScrollViewDemo'
import SectionListDemo from './SectionListDemo'

export default class App extends Component {
  state = { route: '' }
  FLATLIST = 'FLATLIST'
  LISTVIEW = 'LISTVIEW'
  SCROLLVIEW = 'SCROLLVIEW'
  SECTIONLIST = 'SECTIONLIST'

  navigateTo (route) {
    return () => {
      this.setState({ route })
    }
  }

  renderHome () {
    return (<View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>react-native-dual demo</Text>
      <Text style={{ textAlign: 'center', marginBottom: 16 }}>Select one to see the lib in action</Text>
      <Button onPress={this.navigateTo(this.FLATLIST)} title='FlatList demo' />
      <Button onPress={this.navigateTo(this.LISTVIEW)} title='ListView demo' />
      <Button onPress={this.navigateTo(this.SCROLLVIEW)} title='ScrollView demo' />
      <Button onPress={this.navigateTo(this.SECTIONLIST)} title='SectionList demo' />
    </View>)
  }

  renderRoute () {
    switch (this.state.route) {
      case this.FLATLIST: return <FlatListDemo name={this.FLATLIST} goBack={this.navigateTo('')} />
      case this.LISTVIEW: return <ListViewDemo name={this.LISTVIEW} goBack={this.navigateTo('')} />
      case this.SCROLLVIEW: return <ScrollViewDemo name={this.SCROLLVIEW} goBack={this.navigateTo('')} />
      case this.SECTIONLIST: return <SectionListDemo name={this.SECTIONLIST} goBack={this.navigateTo('')} />
      default: return this.renderHome()
    }
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#ecf0f1', padding: 16, paddingTop: 32 }}>
        <View style={{ flex: 1, marginBottom:62 }}>
          {this.renderRoute()}
        </View>
      </View>
    )
  }
}
