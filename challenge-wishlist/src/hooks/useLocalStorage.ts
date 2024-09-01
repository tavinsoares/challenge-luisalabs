import { useState, useEffect } from 'react';

interface useLocalStoragePropsParms {
  initialValue: any,
  propStorage: string
}

const useLocalStorage = ({ initialValue, propStorage }: useLocalStoragePropsParms) => {
    const [value, setValue] = useState(
        () => {
          const valueStorage = JSON.parse(localStorage.getItem(propStorage) || JSON.stringify(initialValue))
    
          return valueStorage || initialValue
        }
      )
    
      useEffect(() => {
        localStorage.setItem(propStorage, JSON.stringify(value));
      }, [value, propStorage])
      
      return [value, setValue]
}

export default useLocalStorage