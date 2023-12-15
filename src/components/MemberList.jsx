import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { deleteMembers, fetchMembers } from "../services/MemberServices.js";
import { useNavigate } from "react-router-dom";


export function MemberList(){

    const [members, setMembers] = useState([]);
    const navigate = useNavigate();

    async function populateMemberState(){
        try {
            const data = await fetchMembers();
            setMembers(data.members);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        populateMemberState();
    },[])

    const handleDeleteClick=async(email)=>{
        try {
           await deleteMembers(email);
           populateMemberState();
        } catch (error) {
            console.log(EvalError)
        }
    }


    return(
        <Container>
            <Table className="mt-5" id="api">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Passport Number</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                    {
                        members.map((m) => {
                            return(
                                <tr>
                                    <td><m>{m.fname}</m></td>
                                    <td><m>{m.lname}</m></td>
                                    <td><m>{m.email}</m></td>
                                    <td><m>{m.passportnumber}</m></td>
                                    <td><Button variant="danger" onClick={()=>{
                                        handleDeleteClick(m.email);
                                    }}>Delete</Button> &nbsp; &nbsp;
                                        <Button variant="primary" onClick={()=>{
                                           navigate(`/edit/${m.email}`);
                                        }}>Update</Button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}