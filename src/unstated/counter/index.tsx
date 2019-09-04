import React, { useState } from "react"
import { createContainer } from "unstated-next"

function useCounter(initialState = 0) {
  let [count, setCount] = useState(initialState)
  let decrease = () => setCount(count - 1)
  let increase = () => setCount(count + 1)
  return { count, decrease, increase }
}

let Counter = createContainer(useCounter)

export default Counter
