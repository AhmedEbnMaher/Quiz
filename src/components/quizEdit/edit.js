import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getOneQuizs} from '../../store/landingPage/actions'
import './edit.css'
export const Edit = (props) => {
  useEffect(() => {
  props.getOneQuizs(props.id)
 
       },[props.getOneQuizs])

  return (
    <div className=''>
     
     <div className='quiz-form mt-2'>
         <div className='d-flex'>
         <div className='sub-form d-flex'>
             <label className="col-2">Title:</label>
             <input type='text' placeholder='Enter Title' className="form-style" value={props.onequiz?.title}/>
         </div>
         <div className='sub-form d-flex'>
             <label className='col-2'>Description:</label>
             <input type='text' placeholder='Enter Description' className="form-style" value={props.onequiz?.description}/>
         </div>
         </div>
         <div className='d-flex mt-4'>
         <div className='sub-form d-flex'>
             <label className='col-2'>Final Score:</label>
             <input type='text' placeholder='Enter Final Score'  className="form-style" value={props.onequiz?.finalscore}/>
         </div>
         <div className='sub-form d-flex'>
             <label className="col-2">Url:</label>
             <input type='text' placeholder='Enter URL'  className="form-style" value={props.onequiz?.url}/>
         </div>
         </div>
         {props.onequiz?.questions?.map(question=>(

       
         <div className='p-2 mt-3 questions' key={question.number}>
         <div className="mt-4">
         <div className='sub-form d-flex'>
             <label className="col-1">{question.number}</label>
             <input type='text' placeholder='Enter Question'  className="form-style" value={question.questionvalue}/>
         </div>
         

         </div>
         <div className="d-flex mt-4">
             {question.answers.map((answer,idx)=>( <div className='sub-form d-flex flex-wrap' key={idx}>
             <label className="col-3">Answer{idx}:</label>
             <input type='text' placeholder='Enter Answer1'  className="form-style" value={answer.text}/>
             <input type='text' placeholder='Enter true or false'  className="form-style w-25" value={answer.istrue}/>
         </div>))}         

         </div>
         <div className='d-flex mt-4 mb-3'>
         <div className='sub-form d-flex'>
             <label className="col-2">False Feedback:</label>
             <input type='text' placeholder='Enter False Feedback' className="form-style" value={question.falsefeedback} />
         </div>
         <div className='sub-form d-flex'>
             <label className='col-2'>True Feedback:</label>
             <input type='text' placeholder='Enter True Feedback' className="form-style" value={question.truefeedback}/>
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
    console.log(state)
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Edit)