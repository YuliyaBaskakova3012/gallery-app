import "./Gallery.css";
import { fetchUsers } from "../../redux/pictures-reducer";
import {useDispatch, useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
  const Gallery=()=>{
  const [style, setStyle] = useState({display: 'none'});
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
        {isLoading?<div className="spinner"><Spinner size="lg" animation="grow"  /></div>
        :
        <div className="gallery">
        {users.map(photo=><div className="gallery1" key={photo.id}  
    onMouseEnter={e => {
        setStyle({display: 'block'});
        console.log(e.target.name)
    }}
    onMouseLeave={e => {
        setStyle({display: 'none'})
    }}
    >         
<NavLink to={`/gallery/${photo.id}`}>
             <Button style={style} variant="light" className="gallery-button">Подробнее</Button>
             </NavLink>
             <img className="img" src={photo.url} alt={photo.title}/>
         </div>
     )
        } 
    </div>
        }
       </>
   )
}
export default Gallery;