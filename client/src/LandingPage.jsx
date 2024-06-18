import React, { useEffect, useState } from 'react'
import InterviewingList from './components/FilteredList/InterviewingList';
import OldestModdedList from './components/FilteredList/OldestModdedList';
import RecentlyAddedList from './components/FilteredList/RecentlyAddedList';
import FavoriteList from './components/FilteredList/FavotiteList';

export default function LandingPage({user}){


    return(
        <>
            <div className='flex flex-col items-center font-bold mt-4'>
                Home
            </div>
            <div>
                <FavoriteList />
                <InterviewingList />
                <RecentlyAddedList />
                <OldestModdedList />




            </div>

            
        </>
    )
}