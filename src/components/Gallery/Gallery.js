import "./Gallery.css";
import { fetchUsers } from "../../redux/pictures-reducer";
import {useDispatch, useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Nav, Spinner } from "react-bootstrap";
import { useEffect } from "react";
  const Gallery=()=>{
  const isLoading = useSelector(state => state.pictures.isLoading);
  const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers());
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
        
    const users = useSelector(state => state.pictures.data);
    sessionStorage.setItem("users", JSON.stringify(users));
    return(
        <>
        {isLoading?<div className="spinner"><Spinner size="lg" animation="grow"  /></div>
        :
        <div className="gallery">
        {users.map(photo=><div  key={photo.id}>
         <Nav>
             <img className="img" src={photo.url} alt={photo.title}/>
             <NavLink to={`/gallery/${photo.id}`}>
             <Button variant="light" className="gallery-button">Подробнее</Button>
             </NavLink>
         </Nav>
         </div>
     )
        } 
    </div>
        }
      
       </>
   )
}
export default Gallery;