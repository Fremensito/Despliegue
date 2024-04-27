import mongoose from "mongoose";
import { IsDateString, IsMongoId,  } from "class-validator";

export class CreateLimpiezaDto {
    @IsMongoId()
    readonly habitacion: mongoose.Schema.Types.ObjectId;
    @IsDateString()
    readonly fecha: Date;
    readonly observaciones?:string;
}
