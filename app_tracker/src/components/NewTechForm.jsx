import { useRef, useState} from 'react';
import { createNewTech } from '../../utilities/technologies-api';
import { useNavigate } from 'react-router-dom';

const NewTechForm = () => {
    const navigate = useNavigate();

    const techNameRef = useRef('');

    const [ error, setError ] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        const newTech = {
            name: techNameRef.current.value,
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
                <button>Add</button>
            </form>
        </>
    )

}

export default NewTechForm