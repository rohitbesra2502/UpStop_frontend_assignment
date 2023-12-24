import React, { createContext, useState } from 'react'

export const MyContext = createContext();

const MyProvider = ({children}) => {
    const [assessmentDatas , setAssessmentDatas] = useState([]);
    return (
    <div>
        <MyContext.Provider value={{assessmentDatas , setAssessmentDatas,}}>
            {children}
        </MyContext.Provider>
    </div>
  )
}

export default MyProvider;