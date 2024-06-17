import React from 'react'
import TechListPage from './components/TechPageSection/TechListPage'
import AddTechPage from './AddTechPage'

const TechPage = ({user}) => {
  return (
    <>
    <AddTechPage user={user}/>
    <TechListPage />
    </>

  )
}

export default TechPage