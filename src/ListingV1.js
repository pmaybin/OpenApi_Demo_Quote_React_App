import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class ListingV1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            records: []
        }

    }

    componentDidMount() {
        fetch('http://localhost:8080/quote/all', { method: 'GET' })
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records
                })
            })
            .catch(error => console.log(error))
    }

    renderListing() {
        let records_in = JSON.parse(JSON.stringify(this.state.records))
        // console.log(this.state.records.at(6))
        // records_in.map(record => {
        //     return recordList.push(<li key={record.at(0)}>{record.at(quote_number)}</li>`)
        // })
        let recordList = records_in.map(record => <ListGroup.Item key={record.quote_number}>{record.quote_number}</ListGroup.Item>);
        // let recordList = records_in.map(record => <ListGroup.Item>{JSON.stringify(record)}</ListGroup.Item>);
        // thing.groups.map(group => Object.keys(group.price).map(priceOpt => console.log(priceOpt, group.price[priceOpt])));
        // for(let i = 0; i < this.state.records; i++){
        //     console.log(JSON.parse(JSON.stringify(this.state.records)).at(i))
        // }
        // console.log(JSON.parse(JSON.stringify(this.state.records)).at(0))
        // return recordList = JSON.parse(JSON.stringify(this.state.records)).at(0);
        return recordList;
    }

    render() {
        return (
            <div>
                <ListGroup>
                    {this.renderListing()}
                </ListGroup>

            </div>
        );
    }
}

export default ListingV1;