const Welcome = ({user, onSignOut})=> {
    // This is a dumb "stateless" component
    return (
      <div>
        Welcome <strong>{user.username}</strong>! Login sucessful.
         {/* eslint-disable-next-line */}
        <a href="javascript:void()" onClick={onSignOut}>Back</a>
      </div>
    )
  }
  export default Welcome;