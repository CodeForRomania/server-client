import React from 'react'
import { Progress } from 'semantic-ui-react'

export default function Loading(props) {
  if (props.isLoading) {
    if (props.timedOut) {
      return <div>Loader timed out!</div>
    } else if (props.pastDelay) {
      return <Progress size="tiny" percent={20} />
    } else {
      return null
    }
  } else if (props.error) {
    return <div>Error! Component failed to load</div>
  } else {
    return null
  }
}
