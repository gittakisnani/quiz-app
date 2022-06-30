import React, { createContext, useContext } from 'react'
import general from './general'
import physics from './physics'
import mathematics from './maths'
import history from './history'
import sports from './sports'
import medical from './medical'

const QuestionsContext = createContext({})

const questionsDB = {
    categories: ['General Knowledge', 'Physics', 'Mathematics', 'History', 'Sports', 'Medical'],
    data: {
        'general knowledge': general,
        physics,
        mathematics,
        history, 
        sports,
        medical
    }
}

export const QuestionsProvider = ({ children }) => {
  return (
    <QuestionsContext.Provider value={ questionsDB }>
        {children}
    </QuestionsContext.Provider>
  )
}

export const useCategories = () => useContext(QuestionsContext).categories
export const useData = () => useContext(QuestionsContext).data

export default QuestionsContext