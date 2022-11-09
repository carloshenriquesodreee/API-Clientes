import { IUserEntity } from "../../../../domain/entities/user.entity";

export default function (user: any): IUserEntity | undefined {
    if(!user)
    return


    let convertUser ={
        id_user: user.id_user,
        name: user.name,
        email: user.email,
        password: user.password
    }

    return (convertUser as IUserEntity);
}