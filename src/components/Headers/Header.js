import './Header.css'

import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react-hooks/rules-of-hooks

const Header = () => {
    const  navigate = useNavigate()
    return (
        <div className={'header'}>
                <p>BigBirdSPS</p>
            <div>
                <button onClick={()=> navigate('/login')}>Login</button>
                <button onClick={()=>navigate('/register')}>Register</button>
            </div>
            </div>

    )
}
export {
    Header
}