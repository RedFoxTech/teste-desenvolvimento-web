import { IsString, MinLength, MaxLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {

  @ApiProperty()
  @IsString({
    message: 'Informe uma senha válida',
  })
  @MinLength(6, {
    message: 'A senha deve ter no mínimo 6 caracteres',
  })
  @MaxLength(32, {
    message: 'A senha deve ter no máximo 32 caracteres.',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número ou um símbulo',
  })
  password: string;

  @ApiProperty()
  @IsString({
    message: 'Informe uma senha válida',
  })
  @MinLength(6, {
    message: 'A senha deve ter no mínimo 6 caracteres',
  })
  @MaxLength(32, {
    message: 'A senha deve ter no máximo 32 caracteres.',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número ou um símbulo',
  })
  passwordConfirmation: string;
}
