import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { fetchMemberByEmail } from "../services/MemberServices.js";
import { useParams } from "react-router-dom";


export function MemberUpdate() {
  const params = useParams();
  const [formData, setFormData]=useState({fname:"", mname:"", lname:"", email:"", contact:"", passportnumber:"", gender:"", password:""});

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const handleGender=(e)=>{
    setFormData({...formData,[e.target.label]:e.target.value});
  }

 const [firstName, setFirstName] = useState("");
 const [middleName, setMiddleName] = useState("");
 const [lastName, setLastName] = useState("");
 const [email, setEmail] = useState("");
 const [passportNumber, setPassportNumber] = useState("");
 const [confirmPassportNumber, setConfirmPassportNumber] = useState("");
const [member, setMember] = useState({}); 
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const [validationMsg, setValidationMsg] = useState("");

 const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
        } catch (error) {
            console.log(error);
        }
    
    }

  const populateMemberState=async ()=>{
      try {
        const result = await fetchMemberByEmail(params.email);
        setMember(result.member);
      } catch (error) {
        console.log(error);
      }
    }

   useEffect(()=>{
      populateMemberState();
   },[]) 


 return (
    <div id="regiUpdate">
      <Container id="reg">
        <Row>
          <Col lg="12" className="mt-4">
            <h2>Update Student Here !</h2>
          </Col>
        </Row>
        {member? <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg="4">
              <Form.Group className="mt-4">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                 type="text"
                 placeholder="Enter First name"
                 value={member.fname}
                 name="fname"
                 onKeyUp={handleChange}
                 onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="4">
              <Form.Group className="mt-4">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                 type="text"
                 placeholder="Enter Middle name"
                 value={member.mname}
                 name="mname"
                 onKeyUp={handleChange}
                 onChange={(e) => setMiddleName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="4">
              <Form.Group className="mt-4">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                 type="text"
                 placeholder="Enter Last name"
                 value={member.lname}
                 name="lname"
                 onKeyUp={handleChange}
                 onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                 type="email"
                 placeholder="name@example.com"
                 value={member.email}
                 name="email"
                 onKeyUp={handleChange}
                 onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Passport Number</Form.Label>
                <Form.Control
                 type="text"
                 placeholder="Enter Passport Number"
                 value={member.passportnumber}
                 name="passportnumber"
                 onKeyUp={handleChange}
                 onChange={(e) => setPassportNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Confirm Passport Number</Form.Label>
                <Form.Control
                 type="text"
                 placeholder="Re-enter Passport Number"
                 value={confirmPassportNumber}
                 onChange={(e) => setConfirmPassportNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Gender</Form.Label>
                <br />
                <Form.Check
                 inline
                 label="Male"
                 name="gender"
                 type="radio"
                 id="r1"
                 //checked={gender === "male"}
                 onChange={handleGender}
                // onChange={() => setGender("male")}
                />
                <Form.Check
                 inline
                 label="Female"
                 name="gender"
                 type="radio"
                 id="r2"
                 //checked={gender === "female"}
                 onChange={handleGender}
                // onChange={() => setGender("female")}
                />
                <Form.Check
                 inline
                 label="Other"
                 name="gender"
                 type="radio"
                 id="r3"
                 //checked={gender === "other"}
                 onChange={handleGender}
                 //onChange={() => setGender("other")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                 type="password"
                 placeholder="Enter password"
                 name="password"
                 value={member.password}
                 onKeyUp={handleChange}
                 onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                 type="password"
                 placeholder="Re-enter password"
                 value={confirmPassword}
                 onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg="12" className="mt-4">
              <Button type="submit" id="rsubmit" >
                Update
              </Button>
              <br /><br />
            </Col>
          </Row>
        </Form>:<p>No data found</p>}
        
        {validationMsg && <p>{validationMsg}</p>}
      </Container>
    </div>
 );
}