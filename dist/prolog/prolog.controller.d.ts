import { PrologService } from './prolog.service';
export declare class PrologController {
    private readonly prologService;
    constructor(prologService: PrologService);
    consultarPersonajes(): Promise<string[]>;
}
