import { Dependency } from "./dependency";

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
  dependency: Dependency;
  dependents: string[]
  dependentType: string;
  dependencyOn: boolean;
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
      dependency?: Dependency;
      dependents?: string[]; dependentType?: string;
      dependencyOn?: boolean;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.required = !!options.required;
    this.validator = options.validator || "";
    this.order = options.order === undefined ? 1 : options.order;
    this.rowDivision = options.rowDivision === undefined ? 1 : options.rowDivision;
    this.controlType = options.controlType || "";
    this.type = options.type || "";
    this.dependencyOn = !!options.dependencyOn;
    this.dependency = options.dependency || {} as Dependency;
    this.dependents = options.dependents;
    this.dependentType = options.dependentType || "CONTROL"
    this.options = options.options || [];
  }
}
