import {
    Component, OnInit
} from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";

declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private formGroup: FormGroup;
  private title: string;

  constructor(
  ) {
  }

  ngOnInit() {
    this.setTitle();
    this.createFormGroup();
    this.addFormControls();
  }

  private addFormControls() : void {
    this.formGroup.addControl('name', new FormControl(
        '', Validators.required
    ));
  }
  private createFormGroup() : void {
    this.formGroup = new FormGroup({}, Validators.required);
  }
  private setTitle() : void {
    this.title = 'Input box'
  }
}
