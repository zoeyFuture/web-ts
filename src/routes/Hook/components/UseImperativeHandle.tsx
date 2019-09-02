import React, { useRef, forwardRef, useImperativeHandle } from 'react'

export default forwardRef((props, ref) => {
  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    // 这里返回的属性保存在父组件中的 current 属性中
    focus:  () => {
      inputRef.current.focus()
    },
    input: (title) => {
      inputRef.current.value = title
    }
  }))

  return (
    <div>
      函数组件 - > forwardRef + useImperativeHandle 测试
      <input ref={inputRef} placeholder="ref 焦点测试" />
    </div>
  )
})

