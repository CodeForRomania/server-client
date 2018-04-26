import React from 'react'
import { Dropdown, Header, Container, Form, Input, Button } from 'semantic-ui-react'
import { withFormik } from 'formik'
import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo'
import { countries } from '../../config'

import styled from 'styled-components'

class ActivityArea extends React.Component {
  handleCancel = e => {
    this.props.resetForm()
    console.log('handleCancel')
  }
  handleMultiSelect = (e, { value }) => {
    console.log(this.props.values.selectedCountries, value)
    this.props.setFieldValue('selectedCountries', value)
  }
  render() {
    const { values, handleChange, handleBlur, handleSubmit, isSubmitting } = this.props
    return (
      <Container fluid>
        <Header as="h1" textAlign="center">
          Activity Area
        </Header>

        <Container>
          <Form>
            <Form.Field>
              <label>Countries</label>
              <Dropdown
                value={values.selectedCountries}
                onChange={this.handleMultiSelect}
                placeholder="Select countries to form an area"
                fluid
                multiple
                search
                selection
                options={countries}
              />
            </Form.Field>
            <Form.Field>
              <label>Area Name</label>
              <Input
                value={values.areaName}
                onChange={handleChange}
                onBlur={handleBlur}
                name="areaName"
                fluid
                placeholder="Area name"
              />
            </Form.Field>
            <Form.Group widths="equal">
              <Button disabled={isSubmitting} fluid onClick={this.handleCancel}>
                Cancel
              </Button>
              <Button disabled={isSubmitting} onClick={handleSubmit} fluid>
                {' '}
                Create Area{' '}
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </Container>
    )
  }
}

export default compose(
  withFormik({
    mapPropsToValues: () => ({ selectedCountries: [], areaName: '' }),
    handleSubmit: async (values, { props: { mutate }, setSubmitting }) => {
      console.log('handleSubmit', values)
      setSubmitting(false)
    }
  })
)(ActivityArea)
