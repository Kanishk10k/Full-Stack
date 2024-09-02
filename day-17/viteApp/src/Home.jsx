// function Home(){
//     return(
//         <div>
//             <h1>Hello Techno!</h1>
//         </div>
//     )
// }

// export default Home;

import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'

function Home() {
  return (
    <div className='flex'>
       <Card1/>
       <Card2/>
    </div>
  )
}

export default Home