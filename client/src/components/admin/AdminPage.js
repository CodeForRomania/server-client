import React from 'react'
import Loading from '../Loading'
import Loadable from 'react-loadable'

const LoadingHome = Loadable({
  loader: () => import('./Home'),
  loading: Loading
})

const LoadingActivityType = Loadable({
  loader: () => import('./ActivityType'),
  loading: Loading
})

const LoadingActivityArea = Loadable({
  loader: () => import('./ActivityArea'),
  loading: Loading
})

const LoadingProductType = Loadable({
  loader: () => import('./ProductType'),
  loading: Loading
})

export default class AdminPage extends React.Component {
  render() {
    const { activePage } = this.props

    return (
      <div>
        {activePage === 'activityType' ? (
          <LoadingActivityType />
        ) : activePage === 'activityArea' ? (
          <LoadingActivityArea />
        ) : activePage === 'productType' ? (
          <LoadingProductType />
        ) : (
          <LoadingHome />
        )}
      </div>
    )
  }
}
