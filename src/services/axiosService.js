import axios from "axios";
import {baseURL} from "../constants/Urls";


const axiosService = axios.create({baseURL})

export {
    axiosService
}

