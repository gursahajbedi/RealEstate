import { useContext, useEffect, useState } from "react"
import math from 'math'

import axios from 'axios'
import Listing from "./listing"
import useAuthContext from "../context/useAuthContext"
import { FilterContext, FilterProvider } from "../context/FilterContext"
import Filters from "./filters"

export function Page(prop){
    const count=prop.elementcount
    const total_page=math.ceil(count/6)

    let arr=[]
    for(let i=1;i<=total_page;i++){
        arr.push(i)
    }

    const data=arr.map((item)=>{
        
        if(item==prop.page){
            return (<div key={item} className="page-item"><button className="page-link bg-primary text-light px-3" onClick={()=>prop.setpage(item)}><h5>{item}</h5></button></div>)
        }
        else{
            return (<div key={item} className="page-item"><button className="page-link" onClick={()=>prop.setpage(item)}><h5>{item}</h5></button></div>)
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

export default function Home(prop){
    const {filterState}=useContext(FilterContext)
    const {auth}=useAuthContext()
    const [data,setdata]=useState([])
    const [nextpage,setnextpage]=useState()
    const [prevpage,setprevpage]=useState()
    const [page,setpage]=useState(1)
    const [elementcount,setelementcount]=useState()
    const [isFilter,setisFilter]=useState(false)

    const getpropertylisting=async()=>{
        await axios.get(`http://localhost:8000/api/listings/?page=${page}`).then((res)=>{
            setnextpage(res.data.next)
            setprevpage(res.data.previous)
            setelementcount(res.data.count)
            const data=res.data.results
            //we will give this data to the reducer

            

            const newdata=data.map((item)=>{
                // eslint-disable-next-line react/jsx-key
                return <Listing data={item} key={item.id} setwish={prop.setwish} wish={prop.wish}/>
            })
            if(newdata.length==0){
                setdata([])
            }
            else{
                setdata(newdata)
            }
        })
    }

    const filterslisting=async()=>{
        await axios.post(`http://localhost:8000/api/listings/serach?page=${page}`,filterState,
        {
            headers:{
                Authorization:`Bearer ${auth.user.access}`
            }
        }).then((res)=>{
            setnextpage(res.data.next)
            setprevpage(res.data.previous)
            setelementcount(res.data.count)
            const data=res.data.results
            

            const prefix="http://localhost:8000"

            data.forEach(result => {
                if(result['photo_main']){
                    result["photo_main"]=`${prefix}${result['photo_main']}`
                }
                for (let i = 1; i <= 20; i++) {
                    const photoKey = `photo_${i}`;
                    if (result[photoKey]) {
                        result[photoKey] = `${prefix}${result[photoKey]}`;
                    } else {
                        // Break the loop if the variable doesn't exist
                        break;
                    }
                }
            });

            

            const newdata=data.map((item)=>{
                return <Listing data={item} key={item.id} setwish={prop.setwish} wish={prop.wish}/>
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
        if(auth.user!==null){
            filterslisting()
        }
        if(auth.user==null){
            getpropertylisting()
        }
    },[auth.user,filterState,page])

    useEffect(()=>{
        setpage(1)
    },[filterState])

    return(
        <div>
            <div className="container-fluid">
                {auth.user && (
                <span>
                {!isFilter?(
                    <div className="mt-3 ms-3">
                        <button className="btn btn-dark" onClick={()=>{setisFilter(true)}}>
                            <span className="material-icons fs-3 pt-1">
                                tune
                            </span>
                        </button>
                    </div>
                ):(<div className="container-fluid d-flex justify-content-center">
                    <Filters setisFilter={setisFilter} setpage={setpage}/>
                </div>)}
                </span>
                )}
                {data.length==0?(
                    <h1>No listing available</h1>
                ):(
                    <div className="container-fluid d-flex flex-row flex-wrap justify-content-center gap-5 border-0">
                        {data} 
                    </div>
                )}
                </div>
            <div className="container-fluid d-flex flex-column align-items-center my-5 py-3 ">
                {elementcount>6 && (<Page nextpage={nextpage} prevpage={prevpage} setpage={setpage} elementcount={elementcount} page={page}/>)}
            </div>
        </div>
    )
}
