let ProfilePic = () => {
    return <img src="comments/10897867_915888360470_6095006205638271982_n.jpg" alt="sarahs picture"></img>
}

let CommentBody = (props) => {
    return (
      <div>
      <h1>{props.name}</h1>
      <p>Comment Text</p>
      </div>
    )
}

let Comment = (props) => {
  return (<div>
    <ProfilePic/>
    <CommentBody name={props.name}/>
    </div>
  )
}

let Comments = () => {
    return (<div>
      <ProfilePic/>
      <CommentBody name="Sarah"/>
      </div>
    )
}

ReactDOM.render(<Comments />, document.getElementById('root'))