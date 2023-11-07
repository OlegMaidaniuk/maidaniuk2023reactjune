import {useEffect, useState} from "react";
import {carValidator} from "../../validators/carValidator";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {carService} from "../../services/carService";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars(data))
    }, [])

    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsContainer};