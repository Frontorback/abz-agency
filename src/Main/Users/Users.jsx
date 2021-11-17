import React, { useContext, useEffect, useState } from "react";
import { AxiosContext } from "../APIRequests/Request";
import "./User.scss"
import user from "../../img/User.svg"

const Users = () =>{

    const [page, setPage] = useState(1)
    const {state, Get, GetTotal, total} = useContext(AxiosContext)

    useEffect(() =>{
        Get()
        GetTotal()
        // eslint-disable-next-line
    },[])
      
    const All = () =>{
        setPage(page + 1)
        Get(page + 1)
    }

    return(
        <div className="Users-section">
            <h1>Our cheerful users </h1>
            <h2>The best specialists are shown below</h2>
            <div className="Users-items">
            {state.map(key => (
                
                <div key={key.id} className="Users-card">
                    <img src={key.photo === "https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png"
                     ? user : key.photo} alt="face"/>
                    <h2>{key.name}</h2>
                    <div>{key.position}</div>
                    <div>{key.email}</div>
                    <div>{key.phone}</div>
                </div>
            )) 
            
            }
            </div>
            {total  === page ? null : 
            <div className="btn btn-submit" onClick={() => All()}>
                    <div className="show-more" >Show more</div>
                </div>
            }
        </div>
    )
    
}
export default Users