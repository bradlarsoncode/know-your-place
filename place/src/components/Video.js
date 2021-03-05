import React, { useState } from 'react'
import './Video.css'
import { Jutsu } from 'react-jutsu'

const Video = () => {
  const [room, setRoom] = useState('knowyourplace')
  const [name, setName] = useState('Name')
  const [call, setCall] = useState(false)

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return call ? (
    <Jutsu className='video'
      roomName={room}
      displayName={name}
      containerStyles={{ width: '1200px', height: '800px' }}
      onMeetingEnd={() => console.log('Meeting has ended')}
      loadingComponent={<p>loading ...</p>}
      errorComponent={<p>Oops, something went wrong</p>} />
  ) : (
    <form className='video'>
      <button onClick={handleClick} type='submit'>
        Join Group Video Chat
      </button>
    </form>
  )
}

export default Video