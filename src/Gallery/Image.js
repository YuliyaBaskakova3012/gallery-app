import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";
const Image=()=>{
const pictures=JSON.parse(sessionStorage.getItem("users"));
const navigate=useNavigate();
let url=window.location.href;
let urlPart=url.split("/")[4];
let urlPartNumber=Number(urlPart);
let picturesFilter=pictures.filter(i=>i.id===urlPartNumber);
let pictureUrl=picturesFilter[0].url;
let title=picturesFilter[0].title;

const func=()=>{
    navigate("/");
}
    return(
        <div className="Image">
        <div>{title}</div>
        <div ><img className="img" src={pictureUrl} alt={title}/></div>    
        <div>
         <Button  variant="dark" onClick={()=>func()}>Назад</Button>
        </div>
        </div>
    )
}
export default Image;