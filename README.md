## relux

```bash
  npm install --save relux
```

```javascript
  import React, { Component } from 'react'
  import { render } from 'react-dom'
  import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
  import { Provider } from 'react-redux'
  import { injectStore, createRelux } from 'relux'

  // ...inject to redux store  
  const store = compose(
    applyMiddleware(m1, m2, m3),
    injectStore
  )(createStore)(combineReducers({ r1, r2, r3 }))
  
  const relux = createRelux(store)
  
  @relux('counter1', 0, {
    increment: state => state + 1,
    counter2_increment: null,
  })
  class Counter1 extends Component {
    render() {
      const { counter1, increment, counter1_increment, counter2_increment } = this.props
      return (
        <div>
          <p>{counter1}</p>
          <button onClick={increment}>increment</button>
          <button onClick={counter1_increment}>counter1_increment</button>
          <button onClick={counter2_increment}>counter2_increment</button>
        </div>
      )
    }
  }
  
  @relux('counter2', 0, {
    increment: state => state + 1,
    counter2_increment: null,
  })
  class Counter2 extends Component {
    render() {
      const { counter2, increment, counter1_increment, counter2_increment} = this.props
      return (
        <div>
          <p>{counter2}</p>
          <button onClick={increment}>increment</button>
          <button onClick={counter1_increment}>counter1_increment</button>
          <button onClick={counter2_increment}>counter2_increment</button>
        </div>
      )
    }
  }
  
  render(
    <Provider store={store}>
      <div>
        <Counter1 />
        <Counter2 />
      </div>
    </Provider>,
    document.querySelector('#app')
  )
```