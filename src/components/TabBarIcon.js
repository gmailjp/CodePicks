import React from 'react'
import { Icon } from 'expo'

import { colors } from '../constants'

export default class TabBarIcon extends React.Component {
  render() {
    const { type, name, focused } = this.props
    const IconComponent = Icon[type || 'Ionicons']

    return (
      <IconComponent
        name={name}
        size={22}
        style={{ marginBottom: -3 }}
        color={focused ? colors.tabIconSelected : colors.tabIconDefault}
      />
    )
  }
}
