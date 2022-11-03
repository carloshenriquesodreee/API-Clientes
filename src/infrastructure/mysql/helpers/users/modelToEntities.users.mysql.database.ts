import { IUserEntity } from "../../../../domain/entities/user.entity";

export default function (user: any): IUserEntity | undefined {
    if(!user)
    return

    let users: IUserEntity = {
        id_user: user.id_user,
        name: user.name,
        email:user.email,
        password:user.password
    }

    if(user.logged){
        (users as IUserEntity).id_user = user.id_user;
        (users as IUserEntity).name = user.name;
        (users as IUserEntity).email = user.email;
        (users as IUserEntity).password = user.password;
    }

    return (users as IUserEntity);
}