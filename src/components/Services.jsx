import { Col, Container, Row } from "react-bootstrap";

export function Services(){
    return(
        <div id="SS">
        <Container>
            <Row >
                <Col lg="6" id="S1">
                    <h4 id="SW">BUILD FACILITY</h4>
                   <p id="SW">
                   SpaceRoot designs and builds its reusable rockets and spacecraft at its headquarters in Hawthorne, California. As a company, SpaceRoot is vertically integrated, building the vast majority of the vehicle on the Hawthorne campus. SpaceRoot headquarters remains one of the few facilities in the world where you can see an entire launch vehicle or spacecraft come together under one roof.
                   </p>
                </Col>
                <Col lg="6" id="S1">
                    <img src="Image/S1.jpg" alt="" />
                </Col>
            </Row>

            <Row id="S1">
                <Col lg="6">
                    <img src="Image/S2.jpg" alt="" />
                </Col>
                <Col lg="6">
                    <h4 id="SW">TESTING FACILITY</h4>
                    <p id="SW">SpaceRoot tests its engines, vehicle structures, and systems at a 4,000-acre state-of-the-art rocket development facility in McGregor, Texas. Outfitted with 16 specialized test stands, the facility validates for flight every Merlin engine that powers the Agni 9 and Agni Heavy rockets, and every Draco thruster that controls the Dragon spacecraft.</p>
                </Col>
            </Row>

            <Row >
                <Col lg="6" id="S1">
                    <h4 id="SW">CAPE CANAVERAL SPACE FORCE STATION, SPACE LAUNCH COMPLEX 40</h4>
                   <p id="SW">
                        CAPE CANAVERAL SPACE FORCE STATION, SPACE LAUNCH COMPLEX 40 FLORIDA CAPE CANAVERAL SPACE FORCE STATION, SPACE LAUNCH COMPLEX 40
                        The site’s location on the southeast coast of the US provides access to a wide range of low and medium inclination orbits frequently used by communications and Earth-observing satellites and by supply missions to the International Space Station. The site also allows access to geostationary orbits, as well as departures to the Moon and interplanetary destinations.
                   </p>
                </Col>
                <Col lg="6" id="S1">
                    <img src="Image/S3.jpg" alt="" />
                </Col>
            </Row>

            <Row id="S1">
                <Col lg="6">
                    <img src="Image/S4.jpg" alt="" />
                </Col>
                <Col lg="6">
                    <h4 id="SW">ROOTBASE</h4>
                    <p id="SW">
                        Development, manufacturing, testing, and launch of SpaceRoot’s Starship spacecraft and Super Heavy rocket – collectively referred to as Starship – takes place at Starbase in Texas. One of the world’s first commercial spaceports designed for orbital missions, launches from Starbase will provide access to destinations in Earth orbit, the Moon, Mars, and beyond.
                    </p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}