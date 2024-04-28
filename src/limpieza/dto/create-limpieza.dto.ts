import { IsDateString, IsMongoId } from 'class-validator';

export class CreateLimpiezaDto {
  @IsMongoId()
  readonly habitacion: string;

  @IsDateString()
  readonly fecha: Date;

  readonly observaciones?: string;
}
