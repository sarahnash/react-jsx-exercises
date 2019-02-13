const MyFirstComponent = () => {
  return (
    <h2> this is a component</h2>
  )
}

const myElement = (<div>
  Hello React World! {3 + 4}
  <h1>Interpolation!</h1>
  <MyFirstComponent/>
  </div>)


ReactDOM.render(myElement, document.getElementById('root'))