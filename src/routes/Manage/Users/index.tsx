import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import List from './views/List';
import Detail from './views/Detail';

interface IMatch {
  path: string
}

interface IProps {
  match: IMatch
}

export default (props:IProps) => {
  const { match: { path } } = props
  console.log('path:', path)

  return (
    <div>
      你好，我是Users
    </div>
  )
}
