

  import React, { useEffect, useState } from 'react'
  import { connect } from 'react-redux'
  import { getOneQuizs} from '../../store/landingPage/actions'
  import Header from '../landingpage/header'
  import '../quizEdit/edit.css'
  export const NewQuiz = (props) => {
    useEffect(() => {
    props.getOneQuizs(props.id)
   
         },[props.getOneQuizs,props.onequiz])
  
    return (
      <div className=''>
       
       <div className='quiz-form mt-2'>
           <h1 className="mt-2 mb-2">Create New Quiz</h1>
           <div className='d-flex'>
           <div className='sub-form d-flex'>
               <label className="col-2">Title:</label>
               <input type='text' placeholder='Enter Title' className="form-style" value={props.onequiz?.finalscore}/>
           </div>
           <div className='sub-form d-flex'>
               <label className='col-2'>Description:</label>
               <input type='text' placeholder='Enter Description' className="form-style"/>
           </div>
           </div>
           <div className='d-flex mt-4'>
           <div className='sub-form d-flex'>
               <label className='col-2'>Final Score:</label>
               <input type='text' placeholder='Enter Final Score'  className="form-style" />
           </div>
           <div className='sub-form d-flex'>
               <label className="col-2">Url:</label>
               <input type='text' placeholder='Enter URL'  className="form-style" />
           </div>
           </div>
           <div className='p-2 mt-3 questions'>
           <div className="mt-4">
           <div className='sub-form d-flex'>
               <label className="col-1">Question:</label>
               <input type='text' placeholder='Enter Question'  className="form-style" />
           </div>
           
  
           </div>
           <div className="d-flex mt-4">
           <div className='sub-form d-flex'>
               <label className="col-3">Answer1:</label>
               <input type='text' placeholder='Enter Answer1'  className="form-style" />
           </div>
           <div className='sub-form d-flex'>
               <label className="col-3">Answer2:</label>
               <input type='text' placeholder='Enter Answer2'  className="form-style" />
           </div>
           <div className='sub-form d-flex'>
               <label className="col-3">Answer3:</label>
               <input type='text' placeholder='Enter Answer3'  className="form-style" />
           </div>
           <div className='sub-form d-flex'>
               <label className="col-3">Answer4:</label>
               <input type='text' placeholder='Enter Answer4'  className="form-style" />
           </div>
           
  
           </div>
           <div className='d-flex mt-4 mb-3'>
           <div className='sub-form d-flex'>
               <label className="col-2">False Feedback:</label>
               <input type='text' placeholder='Enter False Feedback' className="form-style"/>
           </div>
           <div className='sub-form d-flex'>
               <label className='col-2'>True Feedback:</label>
               <input type='text' placeholder='Enter True Feedback' className="form-style"/>
           </div>
           </div>
           </div>
           <button type="button" className="btn btn-primary mt-2 mb-2">Save</button>
       </div>
   
      </div>
  
    )
  }
  
  const mapStateToProps = state => {
      console.log(state)
      return {
        onequiz: state.quizsCreator.onequizs,
      
     
      }
    }
    
    export const mapDispatchToProps = dispatch => {
      return {
        getOneQuizs: (id) => {
          dispatch(getOneQuizs(id))
        },
      }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(NewQuiz)
  
  