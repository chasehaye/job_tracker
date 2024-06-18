import  { useEffect, useState } from 'react';
import { getFilteredList } from '../../../utilities/jobs-api';
import JobList from '../JobList/JobList';

const FavoriteList = () => {
    const [favoriteJobs, setFavoriteJobs] = useState([]);

    useEffect(() => {
        async function fetchFavoriteJobs() {
            try{
                const category = 'favorite';
                const value = 'true';
                const order = 'descending';
                const favoritejobs = await getFilteredList(category, value, order);
                setFavoriteJobs(favoritejobs);
            }catch (error) {
                console.error('Error fetching jobs:', error);
            }
        }
        fetchFavoriteJobs();
    } ,[]);

    if (favoriteJobs.length === 0) {
        return null;
    }

    return (
        <div className='m-4'>
            <h2 className='font-bold'>Favorite Jobs</h2>
            <JobList jobs={favoriteJobs}>
            </JobList>
        </div>
    );
};

export default FavoriteList;