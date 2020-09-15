import { ApiProperty } from '@nestjs/swagger';

export class CredentialsDto {

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
