export default function createAction(type) {
  return function action(payload) {
    return { type: type, payload: payload }
  }
}
