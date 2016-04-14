export default function renameHandlers(namespace, handlers) {
  var renamedHandlers = {}

  Object.keys(handlers).forEach(function(key) {
    if (key.indexOf('_') === -1) {
      renamedHandlers[namespace + key] = handlers[key]
    } else {
      renamedHandlers[key] = handlers[key]
    }
  })

  Object.keys(renamedHandlers).forEach(function(key) {
    if (!renamedHandlers[key]) {
      renamedHandlers[key] = function(state) {
        return state
      }
    }
  })

  return renamedHandlers
}