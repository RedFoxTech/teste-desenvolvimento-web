import { UserRole } from '../user-roles.enum';
import { IsString, IsEmail, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {

  @ApiProperty()
  @IsOptional()
  @IsString({
    message: 'Informe um nome de usuário válido',
  })
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail(
    {},
    {
      message: 'Informe um endereço de email válido',
    },
  )
  email: string;

  @ApiProperty()
  @IsOptional()
  role: UserRole;

  @ApiProperty()
  @IsOptional()
  status: boolean;
}
