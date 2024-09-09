import React from 'react'
import './App.css'
import Loader from "./components/Loader/Loader"
import Hero from "./components/Hero/Hero"
import Datasheet from "./components/Datasheet/Datasheet"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import About from "./components/About/About"
import Department from "./components/Department/Department"
import Venue from "./components/Venue/Venue"
import Rules from "./components/Rules/Rules"
import Prizes from "./components/Prizes/Prizes"
import Agenda from "./components/Agenda/Agenda"
import Members from "./components/Members/Members"
import Advisior from "./components/Advisior/Advisior"
import Contact from "./components/Contact/Contact"
import Cta from "./components/Cta/Cta"
import Sponsor from "./components/Sponsor/Sponsor"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div>
      <Loader delay={2500}>
        <Hero></Hero>
        <Datasheet></Datasheet>
        <VideoPlayer></VideoPlayer>
        <About></About>
        <Department></Department>
        <Venue></Venue>
        <Rules></Rules>
        <Prizes></Prizes>
        <Agenda></Agenda>
        <Members></Members>
        <Advisior></Advisior>
        <Contact></Contact>
        <Cta></Cta>
        <Sponsor></Sponsor>
        <Footer></Footer>
      </Loader>
    </div>
  )
}

export default App
