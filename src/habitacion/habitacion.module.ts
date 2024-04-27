import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HabitacionSchema } from './entities/habitacion.entity';

@Module({
    imports: [
        MongooseModule.forFeature([{ 
            name: 'habitaciones', 
            schema: HabitacionSchema 
        }])
      ],
    })
export class HabitacionModule {}