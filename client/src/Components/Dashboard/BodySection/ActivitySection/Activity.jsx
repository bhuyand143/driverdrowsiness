import React from 'react'
import './activity.css'
import { BsArrowRightShort } from 'react-icons/bs'
import user from '../../../../Assets/saksham.jpg'
import user1 from '../../../../Assets/saksham.jpg'
import user2 from '../../../../Assets/saksham.jpg'
import user3 from '../../../../Assets/saksham.jpg'
import user4 from '../../../../Assets/saksham.jpg'
// import user4 from '../../../../Assets/saksham.jpg'

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Recent Sessions</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Session 1</span>
            <small>View Details {'>>>'}</small>
          </div>
          <div className="duration">
            15 mins ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Session 2</span>
            <small>View Details {'>>>'}</small>
          </div>
          <div className="duration">
            5 hours ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Session 3</span>
            <small>View Details {'>>>'}</small>
          </div>
          <div className="duration">
            1 day ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Session 4</span>
            <small>View Details {'>>>'}</small>
          </div>
          <div className="duration">
            1day 10 hours ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Session 5</span>
            <small>View Details {'>>>'}</small>
          </div>
          <div className="duration">
           2 days ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity