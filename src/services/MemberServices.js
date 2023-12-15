
import axios from "axios"

export async function fetchMembers(){
    try {
        const response = await axios.get("http://127.0.0.1:4900/member");
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export async function saveMembers(memberData){
    try {
        const response = await axios.post("http://127.0.0.1:4900/member",memberData);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export async function deleteMembers(email){
    try {
        axios.delete(`http://127.0.0.1:4900/member/${email}`);
    } catch (error) {
        console.log(error)
    }
}

export async function fetchMemberByEmail(email){
    try {
        axios.get(`http://127.0.0.1:4900/member/${email}`);
    } catch (error) {
        console.log(error)
    }
}