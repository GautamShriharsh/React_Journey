import React ,{ useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if (!user) {
        return (
            <div>Please Login</div>
        )
    } else {
        <div>Welcome {user.username}</div>
    }
  
    return (
    <div>
      
    </div>
  )
}

export default Profile
