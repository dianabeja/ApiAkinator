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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaracteristicasController = void 0;
const common_1 = require("@nestjs/common");
const caracteristicas_service_1 = require("./caracteristicas.service");
const create_caracteristica_dto_1 = require("./dto/create-caracteristica.dto");
let CaracteristicasController = class CaracteristicasController {
    constructor(caracteristicasService) {
        this.caracteristicasService = caracteristicasService;
    }
    create(createCaracteristicaDto) {
        return this.caracteristicasService.create(createCaracteristicaDto);
    }
    findAll() {
        return this.caracteristicasService.findAll();
    }
    findOne(id) {
        return this.caracteristicasService.findOne(id);
    }
    randomCararacteristica() {
        return this.caracteristicasService.randomCararacteristica();
    }
    randomPersonajes(a) {
        const quitar = a.quitar;
        const id = a.personajes;
        return this.caracteristicasService.randomPersonajes(id, quitar);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_caracteristica_dto_1.CreateCaracteristicaDto]),
    __metadata("design:returntype", void 0)
], CaracteristicasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CaracteristicasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CaracteristicasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/random/buscar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CaracteristicasController.prototype, "randomCararacteristica", null);
__decorate([
    (0, common_1.Get)('/random/personajes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CaracteristicasController.prototype, "randomPersonajes", null);
CaracteristicasController = __decorate([
    (0, common_1.Controller)('caracteristicas'),
    __metadata("design:paramtypes", [caracteristicas_service_1.CaracteristicasService])
], CaracteristicasController);
exports.CaracteristicasController = CaracteristicasController;
//# sourceMappingURL=caracteristicas.controller.js.map