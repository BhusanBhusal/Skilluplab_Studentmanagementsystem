import * as bcrypt from "bcrypt";
import { createNewUser, getAllUsers } from '@/models/user.model';

export const createUser = async(data) => {
    const hashPassword = await bcrypt.hash(data.password, 10);
    await createNewUser({...data, password: hashPassword  });
}

export const getUsers = async(data) => {
    const users = await getAllUsers();
    return users;
}