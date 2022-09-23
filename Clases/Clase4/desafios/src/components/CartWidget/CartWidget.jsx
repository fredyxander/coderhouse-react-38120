import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = ()=>{
    return(
        <div>
            <FontAwesomeIcon icon={faUser}/>
            <span>5</span>
        </div>
    )
}