import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class AdminMenu extends React.Component {
  handleClick = (e, { name }) => {
    this.props.history.push(`/admin/${name}`)
  }
  render() {
    const { activePage } = this.props
    return (
      <Menu pointing vertical fluid>
        <Menu.Item name="home" active={activePage === 'home'} onClick={this.handleClick} />
        <Menu.Item
          name="activityArea"
          active={activePage === 'activityArea'}
          onClick={this.handleClick}
        />
        <Menu.Item
          name="activityType"
          active={activePage === 'activityType'}
          onClick={this.handleClick}
        />
        <Menu.Item
          name="productType"
          active={activePage === 'productType'}
          onClick={this.handleClick}
        />
      </Menu>
    )
  }
}

export default withRouter(AdminMenu)
