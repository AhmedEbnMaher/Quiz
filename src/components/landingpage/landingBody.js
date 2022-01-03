import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getQuizs,getOneQuizs} from '../../store/landingPage/actions'
import './landing.css'

export const LandingBody = (props) => {
    useEffect(() => {
       props.getQuizs()
       console.log(props.onequiz)
      },[props.getQuizs,props.getOneQuizs])

  return (
    <div className='quiz-body mt-5'>
        {
props.quizs.map(quiz=>(
    <div className='quizes mt-3' key={quiz.id}>
        <div>
    <h2 className="quiz-main-title" onClick={()=>{
        props.setModifiction("quiz")
        props.setId(quiz.id)
    }}>{quiz.title}</h2>
    <span className='main-titles'>Description: </span><span>{quiz.description}</span><br/>
    <span className='main-titles'>Final Score: </span><span>{quiz.finalscore}</span><br/>
    <span className='main-titles'>URL: </span><span>{quiz.url}</span>
   
   </div>
    <div>
    <div className="dropdown">
  <i className="dropdown-toggle ml-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   
  </i>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#" onClick={()=>{
        props.setId(quiz.id)
     props.setModifiction(true)
  
    }}>Edit Quiz</a></li>
    <li><a className="dropdown-item" href="#">Add Quiz</a></li>
  
  </ul>
</div>
</div>

  </div>
))
      

     }
     <button type="button" className="btn btn-primary mt-3 mb-5" > <a className="btn-primary create-new" href="/newquiz">Add Quiz</a></button>
    </div>
  )
}
const mapStateToProps = state => {
    return {
      quizs: state.quizsCreator.quizs,
      onequizs: state.quizsCreator.onequizs,
   
    }
  }
  
  export const mapDispatchToProps = dispatch => {
    return {
      getQuizs: () => {
        dispatch(getQuizs())
      },
      getOneQuizs: (id) => {
        dispatch(getOneQuizs(id))
      },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LandingBody)

