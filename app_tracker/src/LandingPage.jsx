import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import InterviewingList from './components/FilteredList/InterviewingList';
import OldestModdedList from './components/FilteredList/OldestModdedList';
import RecentlyAddedList from './components/FilteredList/RecentlyAddedList';

export default function LandingPage({user}){


    return(
        <>
            <div>
                Landing Page
            </div>
            <div>
                <p>===============</p>
                <div>
                <Link to="/profile"><span>{user.name}</span></Link>
                </div>
                <p>===============</p>
            </div>
            <div>
                <InterviewingList />
                <OldestModdedList />
                <RecentlyAddedList />




            </div>
            <div>
                personal user tech stack
            </div>
            <div>
                best job fits based on personal best tech
            </div>
            <div>
                longest pending // longets interviewing
            </div>
            <div>
                toggle offered // toggle accepted
            </div>
            <div>
                archive of rejected // stalled
            </div>
            <div>
                favorites and favorite list
            </div>
            
        </>
    )
}