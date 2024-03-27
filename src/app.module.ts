import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LimpiezaModule } from './limpieza/limpieza.module';

@Module({
  imports: [LimpiezaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
