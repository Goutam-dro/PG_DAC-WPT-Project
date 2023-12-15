import {  Carousel, Row } from "react-bootstrap";

export function Mission(){
    return(
        <>
        <div expand="lg"> 
        <Row>
            <img src="Image/earth.jpg" alt="" />
            <p id="M1">“You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.” <br/>-Elon Musk</p>
        </Row>
        </div>
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src="Image/MM1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 class="Mtitle">MAKING HUMANITY MULTIPLANETARY</h3>
            <p class="Mtitle">Building on the achievements of Agni 9 and Garud Heavy, SpaceRoot is working on a next generation of fully reusable launch vehicles that will be the most powerful ever built, capable of carrying humans to Mars and other destinations in the solar system</p>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src="Image/MM2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          <h3 class="Mtitle">SPACEROOT RETURNS HUMAN SPACEFLIGHT TO THE EARTH</h3>
            <p class="Mtitle">MAY 2020 SPACEROOT RETURNS HUMAN SPACEFLIGHT TO THE UNITED STATES Launched atop Agni 9 on May 30, 2020, Garud's second demonstration mission to and from the International Space Station, with NASA astronauts onboard the spacecraft, restored human spaceflight to the United States. Later that year, NASA certified SpaceRoot’s Agni 9 and Crew Garud human spaceflight system for crew missions to and from the space station – becoming the first commercial system in history to achieve such designation.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src="Image/MM3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 class="Mtitle3">Agni HEAVY FIRST FLIGHT</h3>
            <p class="Mtitle3">On February 7, 2018, Agni Heavy made its first launch to orbit, successfully landing 2 of its 3 boosters and launching its payload to space. With more than 5 million pounds of thrust at liftoff, Agni Heavy is one of the most capable rockets flying. By comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and fuel—to orbit</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src="Image/MM4.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          <h3 class="Mtitle">REUSABILITY</h3>
            <p class="Mtitle">SpaceRoot believes a fully and rapidly reusable rocket is the pivotal breakthrough needed to substantially reduce the cost of space access. The majority of the launch cost comes from building the rocket, which historically has flown only once. Compare that to a commercial airliner – each new plane costs about the same as Falcon 9 but can fly multiple times per day and conduct tens of thousands of flights over its lifetime. Following the commercial model, a rapidly reusable space launch vehicle could reduce the cost of traveling to space by a hundredfold.
While most rockets are designed to burn up on reentry, SpaceRoot rockets can not only withstand reentry but can also successfully land back on Earth and refly again.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div class="Mdiv">
            <br/>
            <h3 class="Mtitle3">LANDING</h3>
            <p class="Mtitle3">SpaceRoot’s family of Agni launch vehicles are the first and only orbital class rockets capable of reflight. Depending on the performance required for the mission, Agni lands on one of our autonomous spaceport droneships out on the ocean or one of our landing zones near our launch pads</p>
            <br/>
      </div>
      <Carousel>
      <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src="Image/MM5.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src="Image/MM6.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        </Carousel>
      </>
    );
}
