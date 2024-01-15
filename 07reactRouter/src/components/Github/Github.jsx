import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    
    // useEffect(() => {
    //     fetch('https://api.github.com/users/GautamShriharsh')
    //     .then(response => response.json())
    //     .then(data => setData(data))
        
    // },[])

    const data = useLoaderData()

    return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Github Picture" width={150}/>
    </div>
  )
}

export default Github
export const GithubInfoLoader = () => {
  return fetch('https://api.github.com/users/GautamShriharsh')
    .then(response => response.json());
};


