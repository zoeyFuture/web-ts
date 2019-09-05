import { useState } from 'react'
// import isPlainObject from 'lodash/isPlainObject'

const useSessionStorage = (initialValue = {}) => {
  const [value, setValue] = useState(initialValue)

  return [value, setValue]
}

export default useSessionStorage
