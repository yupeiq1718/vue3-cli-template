const useIcon = () => {
  const requireAll = (requireContext:any) => {
    console.log(requireContext)
    requireContext.keys().map(requireContext)
  }
  const req = require.context('@/assets/icons', false, /\.svg$/)
  requireAll(req)
}

export {
  useIcon
}
