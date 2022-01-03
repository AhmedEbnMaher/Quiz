import React,{useState} from 'react'
import Header from './header'
import LandingBody from './landingBody'
import Edit from '../quizEdit/edit'
import QuizBody from '../queizBody/quizBody'
import './landing.css'
export const LandingPage = () => {
  const [modification,setModifiction]=useState("none")
  const [id,setId]=useState()

  return (
    <div className='nav-bar'>
      {console.log(id)}
    <Header/>
    {modification==="none"?<LandingBody setModifiction={setModifiction} setId={setId}/>:modification==="edit"?<Edit id={id}/>:<QuizBody id={id}/>}
   
   
    </div>
  )
}
export default LandingPage
