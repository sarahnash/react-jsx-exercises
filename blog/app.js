let Header = () => {
    return <h1>Sarah's Blog!</h1>
}
let Article = () => {
    return (<div><p>first paragraph</p>
      <p>second paragraph</p>
      <p>last paragraph</p></div>)
}
let Footer = () => {
    return <h2>The end of my blog</h2>
}

let Blog = () => {
    return (<div>
    <Header />
    <Article />
    <Footer />
    </div>)
}


ReactDOM.render(<Blog />, document.getElementById('root'))