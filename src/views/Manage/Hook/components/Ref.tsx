import React, { forwardRef } from 'react'

// 函数组件里面的ref的使用，可以使用 useImperativeHandle hook优化处理
export default forwardRef((props, ref) => {
  return (
    <div>
      函数组件 - createRef forwardRef 测试
      <input ref={ref} placeholder="ref 焦点测试" />
    </div>
  )
})
