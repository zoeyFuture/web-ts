import React, { useReducer, useContext, createContext, Context } from 'react';

//初始化stroe的类型、初始化值、reducer
const ADD_COUNTER = 'ADD_COUNTER';

const initialReucer = {
  count: 100
}

function reducer(state: typeof initialReucer, action: { type: typeof ADD_COUNTER }) {
  switch (action.type) {
    case ADD_COUNTER:
      return { ...state, count: state.count + 1 }
    default:
      return state;
  }
}
const ProviderContext: Context<any> = createContext('provider');//创建上下文实例
//高阶组件，给函数组件注入上下文
const providerHoc = (reducer: Function, initialState: any) => (Com: React.FC<any>) => {
  return () => {
    const [state, dispatch] = useReducer<any>(reducer, initialState);
    return (
      <ProviderContext.Provider value={{ state, dispatch }}>
        <Com />
      </ProviderContext.Provider >
    );
  }
}
//
// function Test(): JSX.Element {
//   const { state, dispatch } = useContext(ProviderContext);//通过ProviderContext这个上下文实例获取到value，解构出
//   console.log(state);
//   return (
//     <>
//       <h2>{state.count}</h2>
//       {/*使用dispatch分发action，触发reducer返回新的state*/}
//       <button onClick={() => dispatch({ type: ADD_COUNTER })}>++</button>
//     </>
//   );
// }
// export default providerHoc(reducer, initialReucer)(Test);//注入reducer,initialReucer到Test组件中，通过高阶组件对Test组件进行包裹注入
