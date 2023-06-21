import { Controller, Get } from '@nestjs/common';
import { PrologService } from './prolog.service';

@Controller()
export class PrologController {
  constructor(private readonly prologService: PrologService) {}

  @Get('consulta')
  async consultarPersonajes(): Promise<string[]> {
    return this.prologService.consultarPersonajes();
  }
}
