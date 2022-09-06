import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {Card, Form} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";

class SingleQuote extends Component {


    constructor(props) {
        super(props)
        this.state = {
            records: [],
            quote_requested: false
        }

        this.handleGetSingle = this.handleGetSingle.bind(this)
        this.handleChangeInput = this.handleChangeInput.bind(this)
    }

    // reset(){
    //     // Always set the initial state in its own function, so that
    //     // you can trivially reset your components at any point.
    //     this.state = {
    //         records: [],
    //         quote_requested: false,
    //         quote_number:null
    //     };




    handleGetSingle(){
        this.setState({
            quote_requested: true
        });
        console.log()
        console.log(this.state)
        fetch('http://localhost:8080/quote/' + this.state.quote_number, { method: 'GET' })
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records
                })
            })
            .catch(error => console.log(error))
    }

    handleChangeInput(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    renderListing() {
        let record = JSON.parse(JSON.stringify(this.state.records))

        // console.log(this.state.records.at(6))
        // records_in.map(record => {
        //     return recordList.push(<li key={record.at(0)}>{record.at(quote_number)}</li>`)
        // })
        let recordList  =
            (<Card>
                <Card.Body>
                    <Card.Text>
                        <ListGroup as="ul">
                            <ListGroup.Item key={record.quote_number} as="li" active><p><h3>Quote Number: {record.quote_number}</h3>Date created: {new Date(record.created_date).toDateString()} {new Date(record.created_date).toLocaleTimeString()}</p></ListGroup.Item>
                            <ListGroup.Item as="li"><p>
                                Address:{record.street_address}, {record.city}, {record.zip_code}, {record.state}
                            </p>
                            </ListGroup.Item>
                            <ListGroup.Item as="li"><p>
                                Construction Type:{record.construction_type}, Build Year: {record.year_built}
                            </p>
                            </ListGroup.Item>
                            <ListGroup.Item as="li"><p>
                                <h3> Premium: ${record.quote_premium}</h3>
                            </p>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>)


        return recordList;
    }

    render() {
        let element
        console.log(this.state)
        if (this.state.quote_requested){
            element = this.renderListing()
        }

        return (
            <Row xs={1} md={12} lg={12} className="g-4">
                <Col>
                    <Form>
                    <Row className="mb-3">
                        <Col>
                            <Form.Control id='quoteId'
                                          type="int" placeholder="Quote number"
                                          name={'quote_number'}
                                          value={this.state.value}
                                          onChange={this.handleChangeInput}/>
                        </Col>
                        <Col>
                            <Button onClick={this.handleGetSingle}>Get Quote</Button>
                        </Col>
                        {/*<Form.Group as={Col} controlId="quoteId">*/}
                        {/*    <Form.Label>Quote Number</Form.Label>*/}
                        {/*    <Form.Control />*/}

                        {/*    <Button as={Col} onClick={this.handleGetSingle}>Get Quote</Button>*/}
                        {/*</Form.Group>*/}
                    </Row>
                    </Form>

                        {element}
                </Col>
            </Row>
        );
    }
}

export default SingleQuote;