import UserAdminProfile from "./userAdminProfile";

const UserAdmin =(props) =>{
    const {userAdmin} = props

    return(
        <div>
            <div>{userAdmin.email}</div>
            <div>
                {userAdmin.profile.map((profile) => (<UserAdminProfile key={profile} profile = {profile}/>))}

            </div>
        </div>
    )
}
export default UserAdmin

