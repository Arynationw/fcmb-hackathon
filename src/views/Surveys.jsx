import React from 'react'
import { useStateContext } from '../ContextProvider'
import PageComponent from '../components/layouts/pageComponent'

const Surveys = () => {
  const {Surveys} = useStateContext
  return (
    <>
    <PageComponent title={'Surveys'}>
      
    </PageComponent>
    </>
  )
}

export default Surveys