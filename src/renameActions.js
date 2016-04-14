import createAction from './createAction'

export default function renameActions(namespace, namedHandlers) {
  var actionsTypes = Object.keys(namedHandlers)

  var actions = {}

  actionsTypes.forEach(function(actionType) {
    const action = createAction(actionType)

    if (actionType.startsWith(namespace)) {
      actions[actionType.replace(namespace, '')] = action
    }

    actions[actionType] = action
  })

  return actions
}