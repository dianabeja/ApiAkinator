import { PrologService } from './prolog.service';
export declare class PrologController {
    private readonly prologService;
    constructor(prologService: PrologService);
    consultarPadre(): Promise<any>;
    consulta(): Promise<void>;
}
