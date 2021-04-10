import { UserMode } from "../enums/user-mode.enum";

export interface UpdateUserDto{
    name?: string;
    lastName?: string;
    photoProfile?: string;
    mode?: UserMode;
}
