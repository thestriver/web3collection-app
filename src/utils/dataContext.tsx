import * as React from 'react'

const DataContext = React.createContext<any | null>(null)

function useData() {
    const [chosenCategory, setChosenCategory] = React.useState<any>()


    return {
        chosenCategory,
        setChosenCategory
    }
}

export const DataProvider: React.FC<any> = ({ children }) => {
    const data = useData()

    return  <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export default function DataConsumer() {
    return React.useContext(DataContext)
}