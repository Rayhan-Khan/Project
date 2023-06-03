import { useEffect, useState } from "react"
import axios from 'axios';
export default function HomePage(){
    const [data,setData]=useState([]);
    const [search,setSearch]=useState('');
    const [sort,setSort]=useState(0);
    useEffect(()=>{
        (async function(){
            const res = await axios.get(`https://dummyjson.com/products`);
            setData(res.data.products);
        })();
       
    },[]);
     
    let value=data;
    if(search.length>1)
        value=data.filter(it=>search===it.category)||[];
    return <>
    <h1>Search Product by category</h1>
    <input onChange={(e)=>setSearch(e.target.value)} value={search}></input>
       
    <select onChange={(e)=>setSort(e.target)}>
 <option>Please choose one option</option>
 <option>Low to High</option>
 </select>

        {value.map(it=>{
            return <ul key={it.id}>
                <li>{it.title}
                <ul>
                    <li>
                        {it.category}
                    </li>
                    <li>
                        {it.description}
                    </li>
                    <li>{it.discountPercentage}</li>
                </ul>
                </li>
                
            </ul>
        })}
    </>
}