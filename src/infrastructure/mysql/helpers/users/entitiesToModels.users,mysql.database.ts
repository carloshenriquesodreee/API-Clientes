import { IUserEntity } from "../../../../domain/entities/user.entity"

export default function (user: IUserEntity) {
    const users = {
        id_user: user.id_user,
        name: user.name,
        email: user.email,
        password: user.password
    }

    return{
        users: users
    }
}