import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Custom Validation for restricting certain host domains
 * @param control Base class for FormControl, FormGroup and FormArray
 * @returns {ValidationErrors | null} invalidDomain if there is an error
 */

export function invalidDomain(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value?.toLowerCase();
  const disallowedHost = ['yahoo.com', 'bing.com'];

  if (!value) {
    return null;
  }
  //checks if the field includes any of the disallowed hosts
  const matches = disallowedHost.some((host) => value.indexOf(host) > -1);

  return matches ? { invalidDomain: true } : null;
}
