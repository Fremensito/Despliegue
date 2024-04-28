import { Injectable,BadRequestException,NotFoundException} from '@nestjs/common';
import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Limpieza } from './entities/limpieza.entity';
import { Habitacion } from 'src/habitacion/entities/habitacion.entity';

@Injectable()
export class LimpiezaService {
  habitacionesLimpiasHoy() {
    throw new Error('Method not implemented.');
  }

  limpiezaHoy(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(
  @InjectModel('limpiezas')
  private readonly limpiezaModel: Model<Limpieza>,
  @InjectModel('habitaciones')
  private readonly habitacionModel: Model<Habitacion>
  ){}

  async create(createLimpiezaDto: CreateLimpiezaDto) {
    try{
      const nuevaLimpieza = await this.limpiezaModel.create(createLimpiezaDto);
      await this.habitacionModel.updateOne(
        {_id: createLimpiezaDto.habitacion},
        {ultimaLimpieza:nuevaLimpieza.fecha})
      return nuevaLimpieza;
    }
    catch (error){
      throw new BadRequestException(error.mesºsage);
    }
  }

  async findAll(idHabitacion: string) {
    const limpiezas = await this.limpiezaModel
    .find({ habitacion: idHabitacion })
    .sort({ fecha: -1 });
    return limpiezas || [];
  }



  findOne(id: number) {
    return `This action returns a #${id} limpieza`;
  }

async update(id: string, updateLimpiezaDto: UpdateLimpiezaDto) {
    let limpieza;
    try {
      limpieza = await this.limpiezaModel.findById(id);
      if (!limpieza) {
        throw { code: 404, message: `Limpieza con ID ${id} no encontrada` };
      }
      if (updateLimpiezaDto.fecha) {
        limpieza.fecha = updateLimpiezaDto.fecha;
      }
      if (updateLimpiezaDto.observaciones === null || updateLimpiezaDto.observaciones === "") {
        await this.limpiezaModel.updateOne({ _id: id }, { $unset: { observaciones: "" } });
      } else if (updateLimpiezaDto.observaciones) {
        limpieza.observaciones = updateLimpiezaDto.observaciones;
      }
      await limpieza.save();
    } catch (error) {
      if (error.code === 404) {
        throw new NotFoundException(error.message);
      } else {
        throw new BadRequestException(error.message);
      }
    }
    return limpieza;
  }


}
