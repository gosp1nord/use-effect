export const AllUsersComponent = ({props}) => {
  return (
    <ul className="block-items-user">
    {props.items.map(user => <li className="item-user" id={user.id} key={user.id} onClick={props.click}>{user.name}</li>)}
    </ul>
  )
}

export const UserDetailComponent = ({props}) => {
  let component = []
  if (props.id) {
    component = [<UserDetail key={props.id} props={props}/>]
  }
  return (
    <>
      {component}
    </>
  )
}

const UserDetail = ({props}) => {
  return (
    <>
    <img className="item-img" src={props.avatar} />
    <div className="item-data">{props.name}</div>
    <div className="item-data">City: {props.details.city}</div>
    <div className="item-data">Company: {props.details.company}</div>
    <div className="item-data">Position: {props.details.position}</div>
    </>
  )
}
