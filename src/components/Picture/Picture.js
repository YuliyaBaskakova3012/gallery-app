import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadPicture } from "../../redux/picture-reducer";
import Preloader from "../common/Preloader";
import "./Picture.scss";

const Picture=()=>{
const pictures=JSON.parse(sessionStorage.getItem("users"));
const navigate=useNavigate();
const url=window.location.hash;
const urlPart=url.split("/")[2];
const urlPartNumber=Number(urlPart);
const picturesFilter=pictures.filter(i=>i.id===urlPartNumber);
const pictureUrl=picturesFilter[0].url;
const title=picturesFilter[0].title;
const id=picturesFilter[0].id;
const isLoading = useSelector(state => state.picture.isLoading);
const dispatch = useDispatch();
  
const func=()=>{
    navigate("/");
}
useEffect(()=>{
    document.title="Подробности о картинке";
})
useEffect(()=>{
    dispatch(loadPicture());   
    //eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

    return(
        <>
        {isLoading?<Preloader/>:
         <div className="Picture">
              <div>
                <p><strong>Заголовок:</strong> {title}</p>
                <p><strong>ID:</strong> {id}</p>
                <p><strong>Ссылка:</strong> <a href={pictureUrl}>{pictureUrl}</a></p>
              </div>
         <div><img src={pictureUrl} alt={title}/></div>    
         <div>
           <Button variant="dark" onClick={()=>func()}>Назад</Button>
         </div>
         </div>
        }
       
        </>
    )
}
export default Picture;