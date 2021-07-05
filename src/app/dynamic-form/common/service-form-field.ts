export class FormField<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  validator: string;
  order: number;
  controlType: string;
  type: string;
  rowDivision: number;
  dependency: boolean;
  dependencies: FormField<T>[];
  options: { key: string; value: string }[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      validator?: string;
      order?: number;
      controlType?: string;
      type?: string;
      rowDivision?: number;
      dependency?: boolean;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.validator = options.validator || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.rowDivision =
      options.rowDivision === undefined ? 1 : options.rowDivision;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.dependency = !!options.dependency;
    this.options = options.options || [];
  }
}
