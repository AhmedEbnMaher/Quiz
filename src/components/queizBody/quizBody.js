import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getOneQuizs} from '../../store/landingPage/actions'
import '../quizEdit/edit.css'
export const QuizEdit = (props) => {
    const [feedback,setFeadBack]=useState("")
    const [quizId,setQuizId]=useState()
  useEffect(() => {
  props.getOneQuizs(props.id)
 
       },[props.getOneQuizs])

  return (
    <div className=''>
     
     <div className='quiz-form mt-2'>
         <div className='d-flex'>
         <div className='sub-form d-flex'>
             <label className="col-2">{props.onequiz?.title}</label>
             
         </div>
  
         </div>
         {props.onequiz?.questions?.map(question=>(

       
         <div className='p-2 mt-3 questions' key={question.id}>
         <div className="mt-4">
         <div className='sub-form d-flex'>
             <label className="col-1">{question.number}</label>
           
         </div>
         

         </div>
         <div className="d-flex mt-4">
             {question.answers.map((answer,idx)=>( <div className='sub-form d-flex' key={idx}>
             <label  className="col-6 form-check-label" htmlFor="flexRadioDefault1">{answer.text}</label>
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>{
                 setFeadBack(answer.istrue)
                 setQuizId(question.id)
             }}/>
           
         
         </div>))}         

         </div>
         <div className='d-flex mt-4 mb-3'>
         <div className='sub-form d-flex'>
             {quizId===question.id?
         <span  className={feedback !== "" ?"form-style w-25":"show"} >
             {feedback ===false? <span className="text-danger">{question.falsefeedback}</span>:question.truefeedback}
                 </span>
                 :<span></span>
}
         </div>
      
         </div>
         </div>
         ))
}
     </div>
  
    </div>

  )
}

const mapStateToProps = state => {

    return {
      onequiz: state.quizsCreator.onequiz,
    
   
    }
  }
  
  export const mapDispatchToProps = dispatch => {
    return {
      getOneQuizs: (id) => {
        dispatch(getOneQuizs(id))
      },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(QuizEdit)

