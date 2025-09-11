import { useParams } from "react-router-dom";
import { fetchCountry } from "../api";
import { useEffect, useState } from "react";

export default function Country(){

    const params = useParams();
    const [country, setCountry] = useState();

    // @ts-ignore
    const setInitData = async()=>{
        const data = await fetchCountry(params.code);
        setCountry(data);
    };

    useEffect(()=>{
        setInitData();
    }, [params.code]);
    return <div>Country : {params.code}</div>
}