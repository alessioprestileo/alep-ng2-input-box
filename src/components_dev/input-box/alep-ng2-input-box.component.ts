import { Component, DoCheck, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'alep-ng2-input-box',
  templateUrl: 'alep-ng2-input-box.component.html',
  styleUrls: ['alep-ng2-input-box.component.css']
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
    return (reference.control && !reference.control.valid &&
      !reference.control.pristine);
  }
  public hasSuccess(reference: FormControlDirective) : boolean {
    return (reference.control && reference.control.valid &&
      !reference.control.pristine);
  }
}
