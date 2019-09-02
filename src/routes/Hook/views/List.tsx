import React, { useState, useEffect, useRef, useImperativeHandle } from 'react'

import UseRef from '../components/UseRef'
import UseImperativeHandle from '../components/UseImperativeHandle'
import Ref from '../components/Ref'

export default () => {
  const subInputRef = useRef()
  const domInputRef = React.createRef()

  useEffect(() => {
    // 普通 ref
    console.log('domInputRef.current：', domInputRef.current)
    // 设置输入的值，并获取输入焦点
    domInputRef.current.focus()
    domInputRef.current.value = '李四'
  })

  useEffect(() => {
    // 使用 useImperativeHandle 修饰的 ref
    console.log('subInputRef.current：', subInputRef.current)
    // 设置输入的值，并获取输入焦点
    subInputRef.current.input('张三')
    subInputRef.current.focus()
  })

  return (
    <div>
      <span>Commodity - List</span>

      <Ref ref={domInputRef} />
      <UseRef />
      <UseImperativeHandle ref={subInputRef} />
    </div>
  );
};
