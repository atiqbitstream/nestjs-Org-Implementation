import { ERole } from "../enums/roles.enum";

export class CreateUserDto {
   
  firstName: string;
  lastName: string;
  email?: string;
  role: ERole;
  password: string;
  organizationId?: string;

}
