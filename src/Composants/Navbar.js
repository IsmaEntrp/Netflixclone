
import { useEffect, useState } from 'react'
import './Navbar.css'
function Navbar()
{
    const [show, handleShow] = useState(false)
    useEffect(()=>
    {
        window.addEventListener('scroll',()=>
        {
            if(window.scrollY>100)
            {
                handleShow(true)
            }
            else(
                handleShow(false)
            )
        })
        return ()=>{
            window.removeEventListener('scroll');
        }
    },[])
    return(
        <div className={show ? `Navbar-container ` + 'nav-black':  `Navbar-container`}>

            <img className="Navbar-logo" 
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt="Netflix-Logo"></img>

            <img className="Navbar-avatar" 
            src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" 
            alt="Netflix-Logo"></img>
            
        </div>
    )
}
export default Navbar