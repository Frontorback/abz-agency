import React, { createContext,  useEffect,  useReducer, useState,} from "react"
import axios from "axios"


export const AxiosContext = createContext();

const reducer = (state, action) =>{
    switch(action.type){
        case "SET-USERS":
            return{
                ...state,
                peop: [...state.peop,...action.payload]
            }
        case "CLEAR-USERS":
            return{
                ...state,
                peop: []
            }
       
        case "SET-POSITIONS":
            return{
                ...state,
                pos: action.pos
            }
        default: return state
    }
}
const Request = ({children}) =>{
    const [total, setTotal] = useState(0)
    const [token, setToken] = useState({})
    const [state, dispatch] = useReducer(reducer, {
        peop: [],
        pos:[],
    })
    useEffect(() =>{
        GetToken()
        // eslint-disable-next-line
    },[])
 
    const Get = async(num = 1) =>{
        const res = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${num}&count=9`)

        const payload = Object.keys(res.data.users || {}).map(key => {
            return {
                ...res.data.users[key]
            }
        } )
        dispatch({type:"SET-USERS", payload})
        

    }
    const GetTotal = async() =>{
        const res = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users`)
        setTotal(Math.ceil(res.data.total_pages * 5 / 9))
    }

    const GetPosition = async() =>{
        const res = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)

        const pos = Object.keys(res.data.positions || {}).map(key => {
            return {
                ...res.data.positions[key]
            }
        } )
        dispatch({type:"SET-POSITIONS", pos})

    }

    const GetToken = async() =>{
        const res = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
        setToken(res.data.token)
    }
    const addUser = async keys => {
        
        const config = {     
            headers: {'Token':token}
        }
        console.log(token)
        await axios.post(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, keys, config)
        dispatch({type:"CLEAR-USERS"})

    }
   
    return (
        <AxiosContext.Provider value={{ state:state.peop , position:state.pos, total, Get, GetPosition, GetTotal ,addUser, GetToken}}>
            {children}
        </AxiosContext.Provider>
    )
    
}

export default Request