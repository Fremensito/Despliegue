import { IsDateString, IsMongoId,  } from "class-validator";

export class CreateLimpiezaDto {
    @IsMongoId({ message: 'ID incorrecto' })
    readonly habitacion: string;
  
    @IsDateString()
    readonly fecha: Date;
  
    readonly observaciones?: string;
  }