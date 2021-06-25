import { FormField } from './service-form-field';

export class ServiceForm {
  name: string;
  description: string;
  fields: FormField<string>[];
}
