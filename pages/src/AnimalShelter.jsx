import React, { Component } from 'react'
import Animals from '../../public/animals.json'
import AnimalDisplay from './Animal'
import * as FnFlow from '../lib/FnFlow'
import SearchForm from './Price.jsx'

class AnimalShelter extends Component {
    constructor(props) {
        super(props);
        this.handleCompChange = this.handleCompChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { comparison: '<', price: '', submittedComp: '<', submittedPrice: '' }
    }

    handleCompChange = (e) => this.setState({comparison: e.target.innerText})
    handlePriceChange = (e) => this.setState({price: e.target.value})

    handleSubmit = () => {
        const { comparison, price } = this.state
        console.log("submitted")

        this.setState({ submittedComp: comparison, submittedPrice: price })
    }

    render() {
        const parseAnimalJson = p => <AnimalDisplay type={p.type} state={p.state}
                                                    adoption_fee={p.adoption_fee}
                                                    img={p.img} />
        const animalList = Animals.filter(
            a=>
            FnFlow.IntFilterWrapper(this.state.submittedPrice)
            (FnFlow.ComparisonSwitch(this.state.submittedComp))
            (a.adoption_fee)
        ).map(parseAnimalJson)

        return (
            <div className="flex flex-col">
              <div className="text-5xl font-bold">
                Search by price
              </div>
              <SearchForm state={this.state}
                          handleCompChange={this.handleCompChange}
                          handlePriceChange={this.handlePriceChange}
                          handleSubmit={this.handleSubmit} />
              <div className="flex flex-row">
                <div className="flex flex-row flex-wrap">{animalList}</div>
              </div>
            </div>
        )
    }
}

export default AnimalShelter
