# alep-ng2-input-box

## Installation

To install this Angular2 component, run:

```bash
$ npm install alep-ng2-input-box --save
```

## Dependencies

The styling depends on bootstrap 3.3.7

## Usage

Inputs:
  @Input() private inFormControl: FormControl;
  @Input() private boxCssClass: string;
  @Input() private labelCssClass: string;
  @Input() private label: string = 'Value:';
  @Input() private placeHolder: string;
  @Input() private type: string;

- **inFormControl: FormControl** (required) = FormControl instance to which the input box is connected
- **boxCssClass: string** (optional) = name of the css class to be used for styling the box. Default value is 'alep-ng2-input-box', as defined in 'components/input-box/alep-ng2-input-box-component.ts' or in 'components_dev/input-box/alep-ng2-input-box-component.css'
- **labelCssClass: string** (optional) = name of the css class to be used for styling the label. Default value is 'alep-ng2-input-box-label', as defined in 'components/input-box/alep-ng2-input-box-component.ts' or in 'components_dev/input-box/alep-ng2-input-box-component.css'
- **label: string** (optional) = text to be shown in the input box label. Default value is 'Value:'
- **placeHolder: string** (optional) = text to be shown in the input box placeholder. Default value is `'Insert ' + this.label.toLocaleLowerCase().substr(0, this.label.length - 1)`
- **type: string** (optional) = type of input to be received by the input box. Not fully implemented. Default value is 'password' if the label contains the word 'password', regardless of uppercase, otherwise the default value is 'text'. If the value is 'password', the input is shown as 'hidden'.

## Development

Source code can be found at:

https://github.com/alessioprestileo/alep-ng2-input-box.git

## License

MIT © [Alessio Prestileo](alessioprestileo@gmail.com)
