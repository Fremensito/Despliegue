import {Prop,Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Limpieza extends Document{
    @Prop({
        required: true,
        ref:'habitaciones'
    })
    habitacion: mongoose.Schema.Types.ObjectId;

    @Prop({
        required: true,
        default:Date.now()
    })
    fecha: Date;

    @Prop({
        required:false,
        trim:true
    })
    observaciones:string;

}

export const LimpiezaSchema = SchemaFactory.createForClass(Limpieza);
