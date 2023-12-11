import { useEffect, useState } from "react"
import math from 'math'

import useAuthContext from "../context/useAuthContext"
import axios from 'axios'
import Listing from "./listing"

export function Page(prop){
    const count=prop.elementcount
    const total_page=math.ceil(count/6)

    let arr=[]
    for(let i=1;i<=total_page;i++){
        arr.push(i)
    }

    const data=arr.map((item)=>{
        console.log(item)
        if(item==prop.page){
            return (<div key={item} className="page-item"><button className="page-link bg-primary text-light px-3" onClick={()=>prop.setpage(item)}><h1>{item}</h1></button></div>)
        }
        else{
            return (<div key={item} className="page-item"><button className="page-link" onClick={()=>prop.setpage(item)}><h1>{item}</h1></button></div>)
        }
    })

    return(
        <div>
            <nav aria-label="Page navigation example">
                <div className="pagination">
                       {data}
                </div>
            </nav>
        </div>
    )
}

export default function Home(){
    const [data,setdata]=useState([])
    const [nextpage,setnextpage]=useState()
    const [prevpage,setprevpage]=useState()
    const [page,setpage]=useState(1)
    const [elementcount,setelementcount]=useState()
    // axios.defaults.headers.common['Authorization']=`Bearer ${(value.user.access)}`

    const getpropertylisting=async()=>{
        await axios.get(`http://localhost:8000/api/listings/?page=${page}`).then((res)=>{
        setnextpage(res.data.next)
        setprevpage(res.data.previous)
        setelementcount(res.data.count)
        const data=res.data.results
            //we will give this data to the reducer

            console.log(res.data)

            const newdata=data.map((item)=>{
                // eslint-disable-next-line react/jsx-key
                return <Listing data={item} key={item.id}/>
            })
            if(newdata.length==0){
                setdata([])
            }
            else{
                setdata(newdata)
            }
        })
    }

    useEffect(()=>{
        getpropertylisting()
    },[page])

    return(
        <div>
            {data.length==0?(
                <h1>No listing available</h1>
            ):(
                <div className="container-fluid">
                    <div className="container-fluid card d-flex flex-row flex-wrap justify-content-center gap-5 border-0">
                        {data} 
                    </div>
                </div>
            )}
            <div className="container-fluid d-flex flex-column align-items-center my-5 py-3 bg-dark">
                {elementcount>6 && (<Page nextpage={nextpage} prevpage={prevpage} setpage={setpage} elementcount={elementcount} page={page}/>)}
            </div>
        </div>
    )
}
