import React from 'react'
import './top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import img from '../../../../Assets/saksham.jpg'
import car from '../../../../Assets/dibyajyoticar.png'
import video from '../../../../Assets/video.mp4'
import axios from 'axios'
import image from '../../../../Assets/drows.png'

function createData(eyes_closed,mouth_open, status) {
  eyes_closed=Math.floor(Math.random() * 25);
  mouth_open=Math.floor(Math.random() * 25);
  status=(eyes_closed>15 || mouth_open>15)==1?'Drowsy':'Not Drowsy';
  return { eyes_closed, mouth_open, status};
}
const Top = () => {
  const handleStart = (e)=>{
    
      e.preventDefault()
      try
      {
      axios.get('http://localhost:8800/api/auth/run')
      const val = createData()
      axios.post('http://localhost:8800/api/session',val)
      }catch(error)
      {
        console.log(error)
      }
  }
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          {/* <h1>Welcome to Driver Drowsiness Detection System.</h1> */}
          <h1>Hello User!</h1>
          {/* <p>Hello User, Welcome back!</p> */}
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>

      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Start a Session!</h1>
          <p>Driving Safer, Staying Alert: A Drowsiness Detection Initiative</p>

          <div className="buttons flex">
            <button className="btn" onClick={handleStart}>Start!</button>
            {/* <button className="btn transparent">Start</button> */}
          </div>

          <div className="videoDiv">
            {/* <video src={video} autoPlay loop muted></video> */}
            <img src={image} alt="drowsy" />
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>Your Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Sessions</small>
                </span>
                <span>
                  This Month <br /> <small>138 Sessions</small>
                </span>
              </div>

              <span className="flex link">
                Go to my sessions <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={car} alt="Image Name" />
            </div>
            {/* We Shall use this card later */}
            <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>Having trouble in Planti, please contact us from for more questions.</p>
                <button className="btn">Go to help center</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Top