import { Controller, Get } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('api/v1/usuario')
export class UsuarioController {

    constructor(
        private readonly usuarioServicio: UsuarioService,
    ) { }

    @Get()
    obtenerTodos() {
        return this.usuarioServicio.obtenerTodos();
    }
}
