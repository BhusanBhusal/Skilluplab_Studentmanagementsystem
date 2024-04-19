'use server';

import * as userService from '@/services/user.service';

export const getUsers = async() => {
    const users = await userService.getUsers();
    return users;
}