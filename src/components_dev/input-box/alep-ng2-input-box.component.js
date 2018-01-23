"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AlepNg2InputBoxComponent = (function () {
    function AlepNg2InputBoxComponent() {
        this.label = 'Value:';
        this.boxDefaultCssClass = 'alep-ng2-input-box';
        this.labelDefaultCssClass = 'alep-ng2-input-box-label';
    }
    /* Lifecycle hooks */
    AlepNg2InputBoxComponent.prototype.ngOnInit = function () {
        this.setType();
        this.setPlaceHolder();
    };
    AlepNg2InputBoxComponent.prototype.ngDoCheck = function () {
        if (this.placeHolderHasChanged()) {
            this.previousPlaceHolder = this.placeHolder;
            this.setPlaceHolder();
        }
    };
    /* Private methods */
    AlepNg2InputBoxComponent.prototype.placeHolderHasChanged = function () {
        return this.placeHolder !== this.previousPlaceHolder;
    };
    AlepNg2InputBoxComponent.prototype.setPlaceHolder = function () {
        if (!this.placeHolder) {
            this.placeHolder = 'Insert ' +
                this.label.toLocaleLowerCase()
                    .substr(0, this.label.length - 1);
        }
        var inputElm = this.box.nativeElement;
        if (!inputElm.getAttribute('value')) {
            inputElm.setAttribute("placeholder", this.placeHolder);
        }
    };
    AlepNg2InputBoxComponent.prototype.setType = function () {
        if (this.type) {
            switch (this.type) {
                case 'password':
                    break;
                case 'text':
                    break;
                default:
                    this.type = 'text';
                    break;
            }
        }
        else {
            if (this.label.toLocaleLowerCase().includes('password')) {
                this.type = 'password';
            }
            else {
                this.type = 'text';
            }
        }
    };
    /* Public methods */
    AlepNg2InputBoxComponent.prototype.hasError = function (reference) {
        return (reference.control && !reference.control.valid &&
            !reference.control.pristine);
    };
    AlepNg2InputBoxComponent.prototype.hasSuccess = function (reference) {
        return (reference.control && reference.control.valid &&
            !reference.control.pristine);
    };
    __decorate([
        core_1.Input()
    ], AlepNg2InputBoxComponent.prototype, "inFormControl", void 0);
    __decorate([
        core_1.Input()
    ], AlepNg2InputBoxComponent.prototype, "boxCssClass", void 0);
    __decorate([
        core_1.Input()
    ], AlepNg2InputBoxComponent.prototype, "labelCssClass", void 0);
    __decorate([
        core_1.Input()
    ], AlepNg2InputBoxComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input()
    ], AlepNg2InputBoxComponent.prototype, "placeHolder", void 0);
    __decorate([
        core_1.Input()
    ], AlepNg2InputBoxComponent.prototype, "type", void 0);
    __decorate([
        core_1.ViewChild("box")
    ], AlepNg2InputBoxComponent.prototype, "box", void 0);
    AlepNg2InputBoxComponent = __decorate([
        core_1.Component({
            selector: 'alep-ng2-input-box',
            templateUrl: 'alep-ng2-input-box.component.html',
            styleUrls: ['alep-ng2-input-box.component.css']
        })
    ], AlepNg2InputBoxComponent);
    return AlepNg2InputBoxComponent;
}());
exports.AlepNg2InputBoxComponent = AlepNg2InputBoxComponent;
