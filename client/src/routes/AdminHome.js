import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import AdminMenu from '../components/admin/AdminMenu'
import AdminPage from '../components/admin/AdminPage'

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
`

const AdminPageContainer = styled.div`
  width: 80vw;
  padding: 10px;
`
const AdminMenuContainer = styled.div`
  width: 20vw;
`

class AdminHome extends React.Component {
  render() {
    const {
      match: {
        params: { activePage = 'home' }
      }
    } = this.props

    return (
      <Container>
        <AdminMenuContainer>
          <AdminMenu activePage={activePage} />
        </AdminMenuContainer>
        <AdminPageContainer>
          <AdminPage activePage={activePage} />
        </AdminPageContainer>
      </Container>
    )
  }
}

const allUsersQuery = gql`
  {
    allUsers {
      id
      email
    }
  }
`

export default graphql(allUsersQuery)(AdminHome)
