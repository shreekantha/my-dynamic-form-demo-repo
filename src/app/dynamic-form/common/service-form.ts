import { ServiceFormFieldGroup } from './service-form-field-group';

export class ServiceForm {
  key: string;
  name: string;
  description: string;
  groups: ServiceFormFieldGroup[];
}
