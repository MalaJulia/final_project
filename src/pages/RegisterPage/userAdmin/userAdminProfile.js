const UserAdminProfile =(props) =>{
    const {profile} = props

    return(
        <div>
            <div>id: {profile._id}</div>
        <div>name: {profile.name}</div>
            <div>surname: {profile.surname}</div>


        </div>

    )
}
export default UserAdminProfile