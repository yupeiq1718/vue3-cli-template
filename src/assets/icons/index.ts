const useIcon = () => {
  const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => {
    console.log(requireContext)
    requireContext.keys().map(requireContext)
  }
  const req = require.context('@/assets/icons', false, /\.svg$/)
  requireAll(req)
}

export {
  useIcon
}
