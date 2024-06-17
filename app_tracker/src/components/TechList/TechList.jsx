import { useState, useEffect } from "react";
import TechItem from "./TechItem/TechItem";

export default function TechList({technologies}){
    const [techComponent, setTechComponent] = useState(null);
    const [filteredTech, setFilteredTech] = useState(null);
    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        const fetchTech = async () => {
            try{
                const resolvedTech = await technologies;
                const mappedFavorites = resolvedTech
                .filter((tech) => tech.favorite) // Filter by favorite
                .map((tech) => (
                  <TechItem key={tech._id} tech={tech} />
                ));
                setFilteredTech(mappedFavorites)

                const mappedTech = resolvedTech.map(tech => (
                    <TechItem key={tech._id} tech={tech} />
                ));
                setTechComponent(mappedTech);
            }catch(err){
                console.error('Error fetching:', err);
            }
        };
        fetchTech();
    }, [technologies])


  const toggleFavorite = () => {
    setIsFiltered(!isFiltered); // Toggle view state
  };







    
    return (
    <>
    <div className="grid grid-cols-1 gap-1 overflow-auto md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 mb-10">
        {isFiltered ?
        filteredTech
        :
        techComponent
        }
        
    </div>
    <div className="mt-20 mx-auto flex justify-evenly">
        <button className='bg-C3 text-white py-1 px-6 rounded text-sm hover:bg-C8 mt-2 h-10' onClick={toggleFavorite}>Show {isFiltered ? "All" : "Favorites"}</button>
    </div>
    </>
    )
}