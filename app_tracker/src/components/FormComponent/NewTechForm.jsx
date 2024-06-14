import { useRef, useState} from 'react';
import { createNewTech } from '../../../utilities/technologies-api';
import { useNavigate } from 'react-router-dom';

const NewTechForm = ({user}) => {
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
            user: user._id
        }
        try {
            const newTechResponse = await createNewTech(newTech);
            navigate(`/tech/${newTechResponse._id}`);
        }catch(err){
            setError(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

            <label className='block text-center mx-auto underline text-lg mb-6'>Add Technology framework or skill</label>
            <div className="flex flex-col items-start lg:flex-row lg:items-center lg:gap-4 ml-4">

                <div  className="mx-auto max-w-2xl">
                    <label htmlFor="techName" className="mr-2">Tech:</label>
                    <input type="text" id="techName" ref={techNameRef} className="border px-2 py-1"/>
                </div>
                <div className="mx-auto mb-4 mt-4 ">
                    <label htmlFor="favorite" className="block mb-2 text-center">Favorite </label>
                    <div className="flex justify-center items-center space-x-2">
                        <input type="checkbox" id="favorite" ref={techFavoriteRef} className="form-checkbox h-6 w-6" />
                        <span className="text-sm">Yes</span>
                    </div>
                </div>

            </div>
            <div className="flex justify-center w-full">
                    <button className="bg-C3 text-white py-1 px-6 rounded text-sm hover:bg-C8 mt-2 h-10 font-bold">Add</button>
            </div>
                
            </form>
        </>
    )

}

export default NewTechForm