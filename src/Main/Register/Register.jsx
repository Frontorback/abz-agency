import React, { useContext, useEffect, useState } from "react";
import { AxiosContext } from "../APIRequests/Request";
import "./Registration.scss"
import Alert from "./Alert";


const Register = () =>{
    const [info, setInfo] = useState({
        name:"",
        email:"",
        phone:"",
        position_id :"",
        photo:{}, 
    })

    const [radio, setRadio] = useState("")
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [txtError, setTxtError] = useState("")
    const [test, setTest] = useState(false)


    const [length, setLength] = useState({
        name:0,
        email:0,
        phone:0
    })
    
    const {position, GetPosition, addUser, Get} = useContext(AxiosContext)

    useEffect(() =>{
        GetPosition()
        
        // eslint-disable-next-line
    },[])
    const handleSubmit = event => {
        event.preventDefault()

        let formData = new FormData()
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('phone', info.phone);
        formData.append('position_id', info.position_id);
        formData.append('photo', info.photo);
        
        addUser(formData)
        Get(1)
        setTest(true)

        setInfo({name:""})
        setInfo({email:""})
        setInfo({phone:""})
        setInfo({position_id:""})
        setInfo({photo:{}})
        setRadio("")
        setTxtError("")
    }
    const fileSelect = e =>{

        e.preventDefault()
        setInfo({...info, photo:e.target.files[0]})
    }

    const chose = (id, name) =>{
        setRadio(name)
        setInfo({...info, position_id:id})
    }
    const nameInput = (value) =>{
        
        if(value.length > 60){
            setNameError("MAX LENGTH is 60")
        }else{
            setInfo({...info, name:value})
            setLength({...length, name:value.length})
            setNameError("")
        }
    }
    const emailInput = (value) =>{
        
        
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(value.length > 100){
                setPhoneError("Length < 100")
                    
                

            }else if(!re.test(String(value).toLowerCase())){
            setEmailError("not valid email")

            setInfo({...info, email:value})
            setLength({...length, email:value.length})

            
        }else{
            setInfo({...info, email:value})
            setLength({...length, email:value.length})
            setEmailError("")
        }
        
        
    }
    const phoneInput = (value) =>{
        

        const re = /^\+?3?8?(0\d{9})$/
        if(value.length > 13){
            setPhoneError(" Length < 13")
            
        }else if(!re.test(String(value).toLowerCase())){
            setPhoneError("not avalible")
            setInfo({...info, phone:value})
            setLength({...length, phone:value.length})
            
        }else{
            setInfo({...info, phone:value})
            setLength({...length, phone:value.length})
            setPhoneError("")
        }
        
        
    }

 
    return(
        <>
        <div className="Register-section" id="register">
            <h1>Register to get a work</h1>
            <h2>Your personal data is stored according to the Privacy Policy</h2>
            <form onSubmit={handleSubmit}>
            <div className="text-area">
                <fieldset className={nameError ? "active-red" : null}>

                <legend style={length.name > 0 ? {display:"flex"} : {display:"none"}}>Label</legend>
                <input className={length.name > 0 ? "input-change" : null} type="text"   onChange={(e) => nameInput(e.target.value)} value={info.name || ""} placeholder="Your name"/>
                <div className="name-area-error err" style={length.name > 0 ? {display:"flex"} : {display:"none"}}>
                <label className="name-error">{nameError}</label>
                <label className="name-error">{length.name}/60</label>
                </div>
               </fieldset>
                
               <fieldset className={emailError ? "active-red" : null}>

                <legend style={length.email > 0 ? {display:"flex"} : {display:"none"}}>Label</legend>
                <input className={length.email > 0 ? "input-change" : null} type="email"  onChange={(e) => emailInput(e.target.value)} value={info.email || ""} placeholder="Email" />
                <div className="email-area-error err" style={length.email > 0 ? {display:"flex"} : {display:"none"}}>
                <label className="email-error">{emailError}</label>
                <label className="email-error">{length.email}/100</label>
                </div>
                </fieldset>

                <fieldset className={phoneError ? "active-red" : null}>

                <legend style={length.phone > 0 ? {display:"flex"} : {display:"none"}}>Label</legend>
                <input className={length.phone > 0 ? "input-change" : null} type="tel"   onChange={(e) => phoneInput(e.target.value)} value={info.phone || ""} placeholder="Phone"/>
                <div className="phone-area-error err" style={length.phone > 0 ? {display:"flex"} : {display:"none"}}>
                <label className="phone-error">{phoneError}</label>
                <label className="phone-error">{length.phone}/13</label>
                </div>
                </fieldset>
            </div>
                
            <div className="radio-btn">
                <div className="Select-radio">Select your position</div>
                {position.map(key => (
                    <div className="radio-area" key={key.id}>
                        <input onChange={() => chose(key.id, key.name)} id={key.name} type="radio" name="check" value={key.name || ""} checked={radio === key.name} />
                        <label htmlFor={key.name}>{key.name}</label>
                    </div>
                ))}
                 
            </div>
            <label htmlFor="upload" className="upload">
                <div className="first-upload">Upload</div>
                <div className="second-upload">{info.photo.name || "Upload your photo"}</div>
            </label>
            <input id="upload" type="file" accept=".jpg, .jpeg" onChange={(e) => fileSelect(e)} style={{display: "none"}}></input>
            <div className={nameError || emailError || phoneError || !radio|| !info.photo.name ? "btn btn-submit-s dis" : "btn btn-submit-s"} >
                
                <input disabled={nameError || emailError || phoneError || !radio|| !info.photo.name} className="submit" type="submit" value="Sign up" />
            </div>
            </form>
            
            <Alert txt={txtError} test={test} setTest={setTest}/>
           
        </div>
        <div className="FootPrint" ></div>
        </>
    )
    
}
export default Register