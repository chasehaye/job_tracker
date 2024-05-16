import { useRef, useState} from 'react';
import { createNewTech } from '../../utilities/technologies-api';
import { useNavigate } from 'react-router-dom';

const NewTechForm = () => {
    const navigate = useNavigate();

    const techNameRef = useRef('');
    const techFavoriteRef = useRef(false); 

    const [ error, setError ] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        const newTech = {
            name: techNameRef.current.value,
            favorite: techFavoriteRef.current.checked,
        }
        try {
            const newTechResponse = await createNewTech(newTech);
            navigate('/');
        }catch(err){
            setError(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <br />
                <p>===============</p>
                
                <label htmlFor="techName">Tech:</label>
                <input type="text" id="techName" ref={techNameRef}/>

                <br />

                <label htmlFor="favorite">Favorite (yes or no): </label>
                <input type="checkbox" id="favorite" ref={techFavoriteRef} />

                <br />
                <button>Add</button>
            </form>
        </>
    )

}

export default NewTechForm