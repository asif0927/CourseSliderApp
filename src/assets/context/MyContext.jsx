import { createContext } from "react";
import {  useState} from "react";
import {API_URL} from "../api/Apiurl";
import axios from "axios";

const Mycontext=createContext();
function Provider({children}) {
    const [courses,setCourses]=useState([]);
    const fetchedData = async () =>{
        try {
            const response=await axios.get(`${API_URL}`);
            setCourses(response.data);
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }

    const sharedValuesandMethods={
        courses,
        setCourses,
        fetchedData
    }

    return (
        <Mycontext.Provider value={sharedValuesandMethods}>
            {children}
        </Mycontext.Provider>
    );
}
export { Provider, Mycontext };