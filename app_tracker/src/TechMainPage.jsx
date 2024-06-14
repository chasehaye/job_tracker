import React from 'react'
import TechListPage from './components/TechPageSection/TechListPage'
import AddTechPage from './AddTechPage'

const TechPage = ({user}) => {
  return (
    <>
    <h1>Tech favorite filter</h1>


    <AddTechPage user={user}/>
    <TechListPage />

    </>

  )
}

export default TechPage