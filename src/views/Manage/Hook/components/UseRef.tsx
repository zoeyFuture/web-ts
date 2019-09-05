import React, { useEffect, useRef, useState } from 'react'

export default () => {
  const [name, setName] = useState('张三')
  // useRef 场景一：获取Dom节点信息
  const domRef = useRef()

  // useRef 场景二：保存上一次的值
  const lastRef = useRef()

  const changeName = (_name: string) => {
    setName(_name)
  }

  useEffect(() => {
    // 访问Dom节点
    console.log('domRef:', domRef.current)
    domRef.current.style.border = '1px solid red'

    // 缓存数据
    lastRef.current = changeName
  })

  console.log('lastRef:', lastRef.current === changeName)

  return (
    <div ref={domRef}>
      useRef -
      {' '}
      {name}
    </div>
  )
}
