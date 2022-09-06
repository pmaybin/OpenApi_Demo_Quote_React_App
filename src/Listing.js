import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {Card} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Listing extends Component {

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
        let recordList = records_in.map(record =>
            <Card>
                <Card.Body>
                    <Card.Text>
                        <ListGroup as="ul">
                            <ListGroup.Item key={record.quote_number} as="li" active><p><h3>Quote Number: {record.quote_number}</h3>Date created: {new Date(record.created_date).toDateString()} {new Date(record.created_date).toLocaleTimeString()}</p></ListGroup.Item>
                            <ListGroup.Item as="li"><p>
                                Address:{record.street_address}, {record.city}, {record.zip_code}, {record.state.toUpperCase()}
                            </p>
                            </ListGroup.Item>
                            <ListGroup.Item as="li"><p>
                                Construction Type:{record.construction_type}, Build Year: {record.year_built}
                            </p>
                            </ListGroup.Item>
                            <ListGroup.Item as="li"><p>
                                <h3> Premium: ${record.quote_premium.toFixed(2)}</h3>
                            </p>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>

                );
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
            <Row xs={1} md={12} lg={12} className="g-4">
                    <Col>
                        <div>
                            {this.renderListing()}
                        </div>
                    </Col>

            </Row>
        );
    }
}

export default Listing;