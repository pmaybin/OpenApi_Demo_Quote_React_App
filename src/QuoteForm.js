import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from 'react';

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        quote_number: null,
                        quote_premium: null,
                        street_address: "",
                        city: "",
                        zip_code: 333333,
                        state: "",
                        year_built: 1900,
                        construction_type: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    // const postquote = async values => {
    //     const res = await fetch({ url: SERVER_URL, method: "POST", body: values });
    //     const data = await res.json();
    //     return data;
    // };

    handleSubmit(event) {
        const that = this;
        let quote_premium;
        fetch('http://localhost:8080/quote/new',
            { method: 'POST',
                headers: new Headers({'Content-Type': 'application/json',}),
                body: JSON.stringify(this.state)
                })
            .then(res => res.json())
            .then(res => alert(["Quote number:" + res.quote_number, "Premium: $" +res.quote_premium]))
            .catch(error => console.log(error))
        console.log(that.state)
        event.preventDefault();
    }

    render() {
        return (
            <Container fluid='sm'>
                <Row className="justify-content-md-center">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="street_address">
                            <Form.Label>Street address</Form.Label>
                            <Form.Control type="text" placeholder="Address"
                                          name={'street_address'}
                                          value={this.state.value}
                                          onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="cityid">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City"
                                          name={'city'}
                                          value={this.state.value}
                                          onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Select State</Form.Label>
                            <Form.Select name={'state'}
                                         value={this.state.value}
                                         onChange={this.handleChange}>
                                <option>select</option>
                                <option>FL</option>
                                <option>GA</option>
                                <option>MI</option>
                                <option>MN</option>
                                <option>MS</option>
                                <option>RI</option>
                                <option>SC</option>
                                <option>SD</option>
                                <option>TN</option>
                                <option>TX</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="zip_codeId">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type="int" placeholder="Zip code"
                                          name={'zip_code'}
                                          value={this.state.value}
                                          onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="cont_typeId">
                            <Form.Label>Construction Type</Form.Label>
                            <Form.Select name={'construction_type'}
                                         value={this.state.value}
                                         onChange={this.handleChange}>
                                <option>select</option>
                                <option>MASONRY</option>
                                <option>FRAME</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="year_builtId">
                            <Form.Label>Construction Year</Form.Label>
                            <Form.Control type="int" placeholder="Construction Year"
                                          name={'year_built'}
                                          value={this.state.value}
                                          onChange={this.handleChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>

        );
    };
}

export default QuoteForm;