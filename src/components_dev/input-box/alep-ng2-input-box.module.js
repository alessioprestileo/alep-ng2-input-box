"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var alep_ng2_input_box_component_1 = require("./alep-ng2-input-box.component");
var shared_module_1 = require("../../shared/shared.module");
var AlepNg2InputBoxModule = (function () {
    function AlepNg2InputBoxModule() {
    }
    AlepNg2InputBoxModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.ReactiveFormsModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                alep_ng2_input_box_component_1.AlepNg2InputBoxComponent
            ],
            exports: [
                alep_ng2_input_box_component_1.AlepNg2InputBoxComponent
            ],
            providers: []
        })
    ], AlepNg2InputBoxModule);
    return AlepNg2InputBoxModule;
}());
exports.AlepNg2InputBoxModule = AlepNg2InputBoxModule;
