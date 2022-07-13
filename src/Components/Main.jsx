import axios from 'axios';
import React , {useEffect, useState} from 'react';
import Individual from './Individual';
import styles from "./main.module.css";

const Main = () => {
    const [data,setData] = useState([]);
    const fetchData = async () => {
        try{
            const dat = await axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts");
            setData(dat.data);
        }catch(e){
            //
        }
     
    }
    useEffect(() => {
      fetchData();
        console.log("check");
    }, [])
    
  return (
    <div className = {styles.container}>
        {data?.map(val => <Individual key={val.id} data = {val} />)}
    </div>
  )
}

export default Main