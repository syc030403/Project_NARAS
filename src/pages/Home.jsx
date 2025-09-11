import { fetchCountries } from "../api";
import { useEffect, useState } from "react";

export default function Home(){

    const [countries, setCountries] = useState();

    // @ts-ignore
    const setInitData = async() => {
       const data = await fetchCountries();
       setCountries(data);
    }

    useEffect(()=>{setInitData()}, [])
    return <div>Home</div>
}

