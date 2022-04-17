import { useEffect } from "react";

const AboutMe=()=>{
    useEffect(()=>{
        document.title="Обо мне";
    })
    return(
    <>
    I am Julia
    </>
)
}
export default  AboutMe;