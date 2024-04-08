import { Module } from '@nestjs/common';
import { LimpiezaService } from './limpieza.service';
import { LimpiezaController } from './limpieza.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LimpiezaSchema } from './entities/limpieza.entity';

@Module({
  controllers: [LimpiezaController],
  providers: [LimpiezaService],
  imports:[
    MongooseModule.forFeature([{
      name:'limpiezas',
      schema:LimpiezaSchema
    }])
  ]
})
export class LimpiezaModule {}
