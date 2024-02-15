import './IconCirurgia.css'
import DogIconCirurgia from './DogIconCirurgia.js';
import PlusIconCirurgia from './PlusIconCirurgia';

const IconCirurgia = () => {
    return (

        <li className="infocardsicon">
            <i id="dog" className="icon">
                <DogIconCirurgia />
            </i>

            <i id="plus" className="icon">
                <PlusIconCirurgia />
            </i>
        </li>

    )
}

export default IconCirurgia;