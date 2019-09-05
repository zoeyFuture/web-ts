export const getRouteMap = (routes) => {
  const routeConfig = [];

  routes.forEach((it) => {
    if (Array.isArray(it.children)) {
      it.children.forEach((d) => {
        routeConfig.push(d)
      })
    } else {
      routeConfig.push(it)
    }
  })

  return routeConfig;
}
