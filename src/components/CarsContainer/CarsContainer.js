import {useEffect, useState} from "react";
// import {carValidator} from "../../validators/carValidator";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {carService} from "../../services/carService";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [flag, setFlag] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)
    const trigger = () => {
    setFlag(prev=>!prev)
    }


    useEffect(()=>{
        carService.getAll().then(({data})=>setCars(data))
    }, [flag])

    return (
        <div>
            <CarForm trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsContainer};