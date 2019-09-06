interface IRoute {
  name: string,
  path: string,
  component?: any,
  children?: Array<IRoute>,
}

export {
  IRoute
}
