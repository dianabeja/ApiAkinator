"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrologService = void 0;
const common_1 = require("@nestjs/common");
const pl = require("tau-prolog");
let PrologService = class PrologService {
    consultarProlog(query) {
        try {
            const session = pl.create();
            const filePath = './ejemplo.pl';
            session.consult(filePath, {
                success: () => {
                },
                error: (err) => {
                    console.error('Error al cargar el archivo Prolog:', err);
                },
            });
            const result = session.query(query);
            console.log('result: ' + result);
            const callback = function (answer) {
                console.log("formato: ", session.format_answer(answer));
                console.log('answer: ' + answer);
            };
            const success = session.answer(callback);
            console.log(success);
            return success;
        }
        catch (error) {
            console.error('Error al ejecutar la consulta Prolog:', error);
            return false;
        }
    }
    async consultarProlog1() {
        const goal = 'obtener_personajes([humano],Personajes';
        const session = pl.create();
        const filePath = './ejemplo.pl';
        await session.consult(filePath);
        await session.query(goal);
        let answer = session.answers();
        console.log(session.format_answer(answer));
    }
};
PrologService = __decorate([
    (0, common_1.Injectable)()
], PrologService);
exports.PrologService = PrologService;
//# sourceMappingURL=prolog.service.js.map