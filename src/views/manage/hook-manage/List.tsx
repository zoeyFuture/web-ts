import React, { useEffect, useRef } from 'react'

import Ref from '@common/hook/Ref'
import UseRef from '@common/hook/UseRef'
import UseImperativeHandle from '@common/hook/UseImperativeHandle'

const List:React.FC = () => {
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
  )
}

export default List
