import * as React from "react";

import List from './views/List';
import Detail from './views/Detail';

interface IProps {
  name: string;
  age: number;
}

const App = (props: IProps) => {
  const { name, age } = props

  return (
    <h1>Hello from {name} and {age}!</h1>
)
};

export default App
