const UserAdmin =(props) =>{
    const {userAdmin} = props

    return(
        <div>
            <div>emaill:{userAdmin.email}</div>
            <div>
                name :{userAdmin.profile.name}
            </div>
            <div>surname: {userAdmin.profile.surname}</div>
        </div>
    )
}
export default UserAdmin

