import { User } from "./User";
import { Role } from "./Role";

export interface UserRole {
    userRoleId: number;
    user: User;
    role: Role;
}