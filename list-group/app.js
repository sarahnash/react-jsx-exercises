let ListGroupItem = (props) => {
    return <li className="list-group-item">{props.name}</li>
}

let ListGroup = () => {
    return (<ul className="list-group">
    <ListGroupItem name="banana"/>
    <ListGroupItem name="thing2"/>
    <ListGroupItem name="thing3"/>
    </ul>)
}

ReactDOM.render(<ListGroup />, document.getElementById('root'))