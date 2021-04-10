import { UserRole } from "../enums/user-role.enum";

export interface CreateUserDto {
    email: string;
    password: string;
    role: UserRole;
}
