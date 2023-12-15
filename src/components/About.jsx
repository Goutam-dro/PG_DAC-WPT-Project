import { Card, Col, Container, Row } from "react-bootstrap";

export function About(){
    return(
        <>
        <div>
        <Row expand="lg">
            <img src="Image/A1.jpg" alt="" />
            <p id="A1">"As Earth to Space transportation remains expensive, access to Space has been limited to very few governments and enterprises. Yet Space has transformed our lives for decades through GPS, Satellite internet and television, weather prediction, disaster response, understanding the universe, and many others.

At SpaceRoot, we are on a mission to open Space for all, by pushing the boundaries of today's technology. We are working towards a future where Space becomes part of our lives, and such a transition will transform humankind like never before. "</p>
        </Row>
        </div>

        <div class="Adiv">
        <Container>
            <h2 id="A2title">CORE TEAM</h2>
            <Row>
                <Col lg="4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="Image/G.jpg" />
                <Card.Body>
                <Card.Title> <h3 id="A3text">Co-Founder</h3><h5 id="A3text">Mr.Goutam Hukeri</h5> </Card.Title>
                <Card.Text id="A3text">
                    Currently pursuing PG Diploma in Advanced Computing from CDAC Mumbai.  <br /> Roll No - 230940320045
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                <Col lg="4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="Image/H.jpg" />
                <Card.Body>
                <Card.Title><h3 id="A3text">Co-Founder</h3><h5 id="A3text">Mr.Harsh Patil</h5></Card.Title>
                <Card.Text id="A3text">
                    Currently pursuing PG Diploma in Advanced Computing from CDAC Mumbai. <br /> Roll No. - 230940520023
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                <Col lg="4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="Image/R.jpg" />
                <Card.Body>
                <Card.Title><h3 id="A3text">Co-Founder</h3><h5 id="A3text">Mr.Rushikesh Patil</h5></Card.Title>
                <Card.Text id="A3text">
                    Currently pursuing PG Diploma in Advanced Computing from CDAC Mumbai. <br /> Roll No - 230940320092
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>

            </Row>
        </Container>
        <br />
        <br />
        <br />
        </div>
        </>
    )
}