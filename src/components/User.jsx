import React from 'react'
import './User.css'

const User = ({ user }) => {
  const { picture, name, email, phone, cell, location, dob, nat } = user;

  return (
    <div className='user-card'>
      <div className='user-image'>
        <img src={picture.large} alt={`${name.first} ${name.last}`} />
      </div>

      <div className='user-info'>
        <h2 className='user-name'>
          {name.title} {name.first} {name.last}
        </h2>

        <div className='info-section'>
          <p className='info-item'>
            <span className='label'>Email:</span>
            <span className='value'>{email}</span>
          </p>
          <p className='info-item'>
            <span className='label'>Phone:</span>
            <span className='value'>{phone}</span>
          </p>
          <p className='info-item'>
            <span className='label'>Mobile:</span>
            <span className='value'>{cell}</span>
          </p>
        </div>

        <div className='info-section'>
          <p className='info-item'>
            <span className='label'>Location:</span>
            <span className='value'>{location.city}, {location.state}, {location.country}</span>
          </p>
          <p className='info-item'>
            <span className='label'>Age:</span>
            <span className='value'>{dob.age} years</span>
          </p>
          <p className='info-item'>
            <span className='label'>Nationality:</span>
            <span className='value'>{nat}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default User