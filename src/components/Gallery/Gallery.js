import "./Gallery.scss";
import { fetchUsers } from "../../redux/gallery-reducer";
import {useDispatch, useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import Preloader from "../common/Preloader";
  const Gallery=()=>{
  const refs=useRef({});     
  const [styledButtonId, changeStyledButtonId] = useState("");
  const [previousStyledButtonId, changePreviousStyledButtonId] = useState("");
  useEffect(()=>{
    if(styledButtonId){
        refs.current[styledButtonId].style.display="block";
    } 
  },[styledButtonId])

  useEffect(()=>{
    if(previousStyledButtonId===styledButtonId){
      changeStyledButtonId("");
      changePreviousStyledButtonId("");
                }
    if(previousStyledButtonId){
      refs.current[previousStyledButtonId].style.display="none";
                } 
            },[previousStyledButtonId, styledButtonId])

  const isLoading = useSelector(state => state.pictures.isLoading);
  const dispatch = useDispatch();
  useEffect(()=>{
    document.title="Галерея";
})
    useEffect(()=>{
        dispatch(fetchUsers());
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
        
    const users = useSelector(state => state.pictures.data);
    sessionStorage.setItem("users", JSON.stringify(users));
    return(
        <>
        {isLoading?<Preloader/>
        :
        <div className="Gallery">
        {users.map(photo=><div className="Gallery__picture" key={photo.id}  
    onMouseEnter={e => {
        changeStyledButtonId(photo.id);   
    }}
    onMouseLeave={e => {
        changePreviousStyledButtonId(photo.id)
    }}
    >         
<NavLink to={`/gallery/${photo.id}`}>
             <Button style={{"display": "none"}} id={photo.id} ref={(el)=>{refs.current[photo.id]=el}} variant="light"  className="Gallery__button">Подробнее</Button>
             </NavLink>
             <img src={photo.thumbnailUrl} alt={photo.title}/>
         </div>
     )
        } 
    </div>
        }
       </>
   )
}
export default Gallery;