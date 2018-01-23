import { Component, DoCheck, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'alep-ng2-input-box',
template: `
<div class="container-fluid"
     style="padding-left: 0;
            padding-right: 0">
  <div class="row">
    <div class="col-sm-4">
      <label [ngClass]="labelCssClass ? labelCssClass : labelDefaultCssClass">
        {{label}}
      </label>
    </div>
    <div class="col-sm-8">
      <div class="form-group"
           [ngClass]="{'has-error': hasError(boxControl),
                       'has-success': hasSuccess(boxControl),
                       'has-feedback': hasError(boxControl) ||
                                       hasSuccess(boxControl)}"
           style="margin-bottom: 0">
        <input #box #boxControl="ngForm"
               [ngClass]="boxCssClass ? boxCssClass : boxDefaultCssClass"
               [formControl]="inFormControl"
               [type]="type">
        <span [ngClass]="{
              'glyphicon form-control-feedback':
                  hasError(boxControl) || hasSuccess(boxControl),
              'glyphicon-remove': hasError(boxControl),
              'glyphicon-ok': hasSuccess(boxControl)}">
        </span>
      </div>
    </div>
  </div>
</div>
`,
styles: [
`.alep-ng2-input-box {
    height: 3.5rem;
    padding-left: 1rem;
    width: 100%
}
.alep-ng2-input-box-label {
    font-size: 2rem;
    font-weight: normal;
    min-height: 3.5rem;
    margin-bottom: 0px;
    vertical-align: middle;
}
`],
})
export class AlepNg2InputBoxComponent implements DoCheck, OnInit {
  @Input() private inFormControl: FormControl;
  @Input() private boxCssClass: string;
  @Input() private labelCssClass: string;
  @Input() private label: string = 'Value:';
  @Input() private placeHolder: string;
  @Input() private type: string;
  @ViewChild("box") private box: ElementRef;
  private boxDefaultCssClass: string = 'alep-ng2-input-box';
  private labelDefaultCssClass: string = 'alep-ng2-input-box-label';
  private previousPlaceHolder: string;

  constructor() {}
  /* Lifecycle hooks */
  ngOnInit() {
    this.setType();
    this.setPlaceHolder();
  }
  ngDoCheck() {
    if (this.placeHolderHasChanged()) {
      this.previousPlaceHolder = this.placeHolder;
      this.setPlaceHolder();
    }
  }
  /* Private methods */
  private placeHolderHasChanged() : boolean {
    return this.placeHolder !== this.previousPlaceHolder;
  }
  private setPlaceHolder() : void {
    if (!this.placeHolder) {
      this.placeHolder = 'Insert ' +
        this.label.toLocaleLowerCase()
          .substr(0, this.label.length - 1);
    }
    let inputElm: HTMLElement = this.box.nativeElement;
    if (!inputElm.getAttribute('value')) {
      inputElm.setAttribute("placeholder", this.placeHolder);
    }
  }
  private setType() : void {
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
  }
  /* Public methods */
  public hasError(reference: FormControlDirective) : boolean {
    let result = (
      reference.control && 
      !reference.control.valid &&
      !reference.control.pristine
    );

    if (typeof result === 'undefined') {
      return false;
    }

    return result;
  }
  public hasSuccess(reference: FormControlDirective) : boolean {
    let result = (
      reference.control && 
      reference.control.valid &&
      !reference.control.pristine
    );

    if (typeof result === 'undefined') {
      return false;
    }

    return result;
  }
}
