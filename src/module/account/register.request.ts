import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { IAccount } from "./account.interface";

export class RegisterRequest implements IAccount {
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(6)
  password?: string;
}

export class LoginRequest implements IAccount {
  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(6)
  password?: string;
}