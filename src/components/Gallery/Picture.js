import { useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadPicture } from "../../redux/picture-reducer";
import "./Gallery.css";

const Picture=()=>{
const pictures=JSON.parse(sessionStorage.getItem("users"));
const navigate=useNavigate();
let url=window.location.href;
let urlPart=url.split("/")[4];
let urlPartNumber=Number(urlPart);
let picturesFilter=pictures.filter(i=>i.id===urlPartNumber);
let pictureUrl=picturesFilter[0].url;
let title=picturesFilter[0].title;

const isLoading = useSelector(state => state.picture.isLoading);
const dispatch = useDispatch();
  
const func=()=>{
    navigate("/");
}
useEffect(()=>{
    dispatch(loadPicture());   
    //eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

    return(
        <>
        {isLoading?<div className="spinner"><Spinner size="lg" animation="grow"  /></div>:
         <div className="Picture">
         <div>{title}</div>
         <div ><img className="img" src={pictureUrl} alt={title}/></div>    
         <div>
          <Button  variant="dark" onClick={()=>func()}>Назад</Button>
         </div>
         </div>
        }
       
        </>
    )
}
export default Picture;