import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Home(){
    return (
        <div>
            <Container>
                <Row>
                    <h1 >OpenData - Open Quote Demo</h1>
                    <Button href={'/newquote'}>Get Started</Button>
                </Row>
            </Container>
        </div>

    )
}