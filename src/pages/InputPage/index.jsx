import React from 'react'

// import Topbar from '../../components/TopBar/topbar'
import Title from '../../components/Title'
import Header from '../../components/Header'
// import StoryInput from '../../components/StoryInput/storyInput'
// import DeveloperInput from '../../components/DeveloperInput/developerInput'
import InputForm from '../../components/InputForm'

export default function Home() {
  return (
    <>
      {/* <Topbar /> */}
      <Header/>
      <Title />
      <InputForm />
    </>
  )
}