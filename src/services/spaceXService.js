import axios from "axios";
import {basUrlSpaceX} from "../constants/urls";

const spaceXService = axios.create({baseURL:basUrlSpaceX});

export {
    spaceXService
}
