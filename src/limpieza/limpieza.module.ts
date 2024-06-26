import { Module } from '@nestjs/common';
import { LimpiezaService } from './limpieza.service';
import { LimpiezaController } from './limpieza.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LimpiezaSchema } from './entities/limpieza.entity';
import { HabitacionSchema } from 'src/habitacion/entities/habitacion.entity';

@Module({
  controllers: [LimpiezaController],
  providers: [LimpiezaService],
  imports:[
    MongooseModule.forFeature([
    {
      name:'limpiezas',
      schema:LimpiezaSchema
    },
    {
      name:'habitaciones',
      schema:HabitacionSchema
    }
  ])
  ]
})
export class LimpiezaModule {}
