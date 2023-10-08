import React from 'react'
import MyContext from './myContext';

function MyState(props) {
    const state={
        name: 'hany',
        id:1
    }
    const color="red"
  return (
    // i here pass the value that i need 
    <MyContext.Provider value={{state,color}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState