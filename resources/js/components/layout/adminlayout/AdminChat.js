import React,{useEffect} from 'react'
import man1 from "./man1.jpg"
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineShareAlt } from 'react-icons/ai';



const AdminChat = () => {
 
  return (
    <section className='admin-chat'>  
      <img src={man1} alt="" className='admin-chat_img' />
      <textarea placeholder='share what you are thinking here...' name="message" id="message" cols="30" rows="10"></textarea>
      <hr style={{"opacity":".2"}}/>
      <div className='admin-grid'>
        {/* <div className="admin-chat_icons">
           <AiOutlineLike  className='admin-chat_icon'/>
           <AiOutlineShareAlt className='admin-chat_icon'/>
       
        </div> */}
        <div className="admin-chat-button">
        <a href="#register" className="primary-bg btn modal-trigger register">Post</a>
        <a href="#register" className="secondary-bg btn modal-trigger register">Upload File</a>
        </div>
        


      </div>
    </section>
  )
}

export default AdminChat