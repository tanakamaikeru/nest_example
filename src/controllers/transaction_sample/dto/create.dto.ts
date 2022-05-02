import { IUser } from "../../../models/entities/user.entity";

export class CreateDto implements IUser{
    name: string;
    code: number;
}