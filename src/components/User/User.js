const User = ({user}) =>{
    const {_id, course, name, surname,email,phone,age,course_format,course_type,created_at,utm,msg,status,sum,already_paid} =user
    return (
        <div>
            <div>name : {name}</div>

        </div>
    )
}
export {User}