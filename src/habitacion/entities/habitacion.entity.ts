import {Prop,Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Habitacion extends Document{

/* número de habitación */
    @Prop({
        required: true,
        min: 1,
        max: 50

    })
    numero: number;

    /* tipo de habitación */
    @Prop({
        required: true,
        enum: ["individual", "doble", "familiar", "suite"]

    })
    tipo: string;

    /* descripción de la habitación: número de camas, tipo de cama, si tiene terraza, si tiene vistas, televisor, etc */
    @Prop({
        required: true,
        trim: true

    })
    descripcion: string;

     /* fecha de la última limpieza */
     @Prop({
        required: true,
        default: Date.now

    })
    ultimaLimpieza: Date;

    /* precio de la habitación por noche */
    @Prop({
        required: true,
        min: 0,
        max: 300

    })
    precio: number;

}

export const HabitacionSchema = SchemaFactory.createForClass(Habitacion);