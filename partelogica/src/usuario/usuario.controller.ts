import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/jwt/JwtAuthGuard';

@UseGuards(JwtAuthGuard)
@ApiTags('Punto de Acceso usuario')
@Controller('api/v1/usuario')
export class UsuarioController {

    constructor(
        private readonly usuarioServicio: UsuarioService,
    ) { }

    @ApiOperation({ summary: 'Lista a todos los usuario' })
    @ApiResponse({ status: 200, description: 'Lista generada exitosamente.' })
    @Get()
    obtenerTodos() {
        return this.usuarioServicio.obtenerTodos();
    }

    @ApiOperation({ summary: 'Lista a un solo usuario' })
    @ApiResponse({ status: 200, description: 'Lista generada exitosamente.' })
    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioServicio.obtenerPorId(id);
    }

    @ApiOperation({ summary: 'Adiciona un usuario' })
    @ApiResponse({ status: 200, description: 'Creacion exitosamente.' })
    @Post()
    adicionar(@Body() datos: Partial<Usuario>) {
        return this.usuarioServicio.adicionar(datos);
    }

    @Put(':id')
    modificar(@Param('id', ParseIntPipe) id: number, @Body() datos: Partial<Usuario>) {
        return this.usuarioServicio.modificar(id, datos);
    }

    @Delete(':id')
    borradoPorId(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioServicio.borrarPorId(id);
    }
}
