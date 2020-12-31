import React, { Component } from 'react'
import {
    Button,
    Form,
    Input,
    Select,
    TextArea,
} from 'semantic-ui-react'

const comparisons = [
    {
        key: '<',
        text: '<',
        value: '<',
    },
    {
        key: '<=',
        text: '<=',
        value: '<=',
    },
    {
        key: '=',
        text: '=',
        value: '=',
    },
    {
        key: '>',
        text: '>',
        value: '>',
    },
    {
        key: '>=',
        text: '>=',
        value: '>=',
    },
]

class SearchForm extends Component {
    constructor(props) {
        super(props);
    }

    handleChange(e, _) {
        this.props.handleChange(e)
    }

    handleSubmit = () => {
        this.props.handleSubmit()
    }

    render() {

        return (
          <div className="flex flex-row">
            <Form onSubmit={this.props.handleSubmit}>
              <Form.Group className="flex items-end">
                <Form.Field
                  control={Select}
                  label='Comparison'
                  compact
                  selection
                  options={comparisons}
                  defaultValue={comparisons[0].value}
                  onChange={this.props.handleCompChange}
                />
                <Form.Field
                  control={Input}
                  label='Price'
                  placeholder=''
                  onChange={this.props.handlePriceChange}
                />
                <Form.Button
                  content='Submit' />
              </Form.Group>
            </Form>
          </div>
        )
    }
}

export default SearchForm
