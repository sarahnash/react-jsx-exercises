let TextInput = () => {
    return (
    <input type="text" className="form-control" placeholder="text input"/>
    )
}

let YesNoRadio = (props) => {
    return (
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
  <label className="btn btn-secondary">
    <input type="radio" name={props.name} id="option2" autoComplete="off"/> {props.name}
  </label>
  </div>
    )
}

let SubmitButton = () => {
return (<input className="btn btn-primary" type="submit" value="Submit"/>)
}

let Form = () => {
    return (<div>
      <TextInput/>
      <TextInput/>
      <TextInput/>
      <YesNoRadio name="YES"/> <YesNoRadio name="NO"/>
      <br/>
      <SubmitButton/>
      </div>
    )
}


ReactDOM.render(<Form />, document.getElementById('root'))