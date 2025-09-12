import style from './Searchbar.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Searchbar ({q}){

    const [search, setSearch] = useState("");
    const nav = useNavigate();


    useEffect(()=>{setSearch(q)}, [q])
    const onChangeSearch = (e) =>{
        setSearch(e.target.value);
    }

    const onClickSearch = () => {
        if(search !== ""){
            nav(`/search?q=${search}`)
        }
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            onClickSearch();
        }
    }

    return (
    <div className={style.container}>
        <input 
            value={search}
            onKeyDown={onKeyDown}
            onChange={onChangeSearch} 
            placeholder="검색어를 입력하세요"/>
        <button onClick={onClickSearch}>SEARCH</button>
    </div>)
}