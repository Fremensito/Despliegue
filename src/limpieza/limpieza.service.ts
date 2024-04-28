import { Injectable,BadRequestException,NotFoundException} from '@nestjs/common';
import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Limpieza } from './entities/limpieza.entity';
import { Habitacion } from 'src/habitacion/entities/habitacion.entity';

@Injectable()
export class LimpiezaService {

  constructor(
    @InjectModel('limpiezas')
    private readonly limpiezaModel: Model<Limpieza>,
    @InjectModel('habitaciones')
    private readonly habitacionModel: Model<Habitacion>
    ){}

  // Método para verificar si una habitación ha sido limpiada hoy
  async limpiezaHoy(id: string) {
    const habitacion = await this.habitacionModel.findById(id);
    if (!habitacion) {
      throw new NotFoundException(`Habitación con ID ${id} no encontrada`);
    }
    // Obtiene la fecha actual
    const hoy = new Date();
    // Convierte la fecha de la última limpieza de la habitación a un objeto Date
    const ultimaLimpieza = new Date(habitacion.ultimaLimpieza);
    // Compara si la fecha de hoy es igual a la fecha de la última limpieza
    // Devuelve un objeto con la propiedad 'ok' que será verdadera si las fechas son iguales y falsa en caso contrario
    return { ok: hoy.toDateString() === ultimaLimpieza.toDateString() };
}

// Método para obtener todas las habitaciones que han sido limpiadas hoy
async habitacionesLimpiasHoy() {
    // Obtiene la fecha actual y establece las horas, minutos, segundos y milisegundos a 0
    // Esto se hace para comparar solo la parte de la fecha (año, mes, día) sin tener en cuenta la hora
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    // Busca todas las habitaciones cuya fecha de última limpieza sea mayor o igual a la fecha de hoy
    // Esto devolverá todas las habitaciones que han sido limpiadas hoy
    const habitaciones = await this.habitacionModel.find({ ultimaLimpieza: { $gte: hoy } });
    // Devuelve las habitaciones
    return habitaciones;
}

// Método para obtener todas las limpiezas de una habitación específica
async findAll(idHabitacion: string) {
  // Busca todas las limpiezas de la habitación especificada en la base de datos
  // y las ordena en orden descendente por fecha
  const limpiezas = await this.limpiezaModel
  .find({ habitacion: idHabitacion })
  .sort({ fecha: -1 });
  // Devuelve las limpiezas encontradas o un array vacío si no se encontró ninguna
  return limpiezas || [];
}

  

// Método para crear una nueva limpieza
async create(createLimpiezaDto: CreateLimpiezaDto) {
  try{
    // Crea una nueva limpieza en la base de datos con los datos proporcionados en el DTO
    const nuevaLimpieza = await this.limpiezaModel.create(createLimpiezaDto);
    // Actualiza la fecha de última limpieza de la habitación correspondiente en la base de datos
    await this.habitacionModel.updateOne(
      {_id: createLimpiezaDto.habitacion},
      {ultimaLimpieza:nuevaLimpieza.fecha})
    // Devuelve la nueva limpieza creada
    return nuevaLimpieza;
  }
  catch (error){
    // Si ocurre un error, lanza una excepción de solicitud incorrecta con el mensaje de error
    throw new BadRequestException(error.mesºsage);
  }
}


// Método para actualizar una limpieza
async update(id: string, updateLimpiezaDto: UpdateLimpiezaDto) {

  let limpieza;
  try {
    limpieza = await this.limpiezaModel.findById(id);
    if (!limpieza) {
      throw { code: 404, message: `Limpieza con ID ${id} no encontrada` };
    }
    // Si se proporciona una fecha en el DTO, actualiza la fecha de la limpieza
    if (updateLimpiezaDto.fecha) {
      limpieza.fecha = updateLimpiezaDto.fecha;
    }
    // Si las observaciones en el DTO son nulas o una cadena vacía, elimina el campo de observaciones
    if (updateLimpiezaDto.observaciones === null || updateLimpiezaDto.observaciones === "") {
      await this.limpiezaModel.updateOne({ _id: id }, { $unset: { observaciones: "" } });
    } 
    // Si se proporcionan observaciones en el DTO, actualiza las observaciones de la limpieza
    else if (updateLimpiezaDto.observaciones) {
      limpieza.observaciones = updateLimpiezaDto.observaciones;
    }
    // Guarda los cambios en la base de datos
    await limpieza.save();
  } catch (error) {
    // Si el error es un error 404, lanza una excepción de no encontrado
    if (error.code === 404) {
      throw new NotFoundException(error.message);
    } 
    // Si es otro tipo de error, lanza una excepción de solicitud incorrecta
    else {
      throw new BadRequestException(error.message);
    }
  }
  // Devuelve la limpieza actualizada
  return limpieza;
}

findOne(id: number) {
  return `This action returns a #${id} limpieza`;
}

}
