"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrologController = void 0;
const common_1 = require("@nestjs/common");
const prolog_service_1 = require("./prolog.service");
let PrologController = class PrologController {
    constructor(prologService) {
        this.prologService = prologService;
    }
    async consultarPadre() {
        const query = "obtener_personajes([humano],Personajes)";
        const result = await this.prologService.consultarProlog(query);
        return result;
    }
    async consulta() {
        return await this.prologService.consultarProlog1();
    }
};
__decorate([
    (0, common_1.Get)('consulta/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrologController.prototype, "consultarPadre", null);
__decorate([
    (0, common_1.Get)('/consulta2/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrologController.prototype, "consulta", null);
PrologController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [prolog_service_1.PrologService])
], PrologController);
exports.PrologController = PrologController;
//# sourceMappingURL=prolog.controller.js.map