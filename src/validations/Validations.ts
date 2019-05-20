export interface IValidations {
    Required: (value: any) => string | undefined;
    GreaterThan: (min: number) => (value: any) => string | undefined;
    LessThan: (max: number) => (value: any) => string | undefined;
    Number: (value: any) => string | undefined;
    Email: (value: string) => string | undefined;
    PhoneNumber: (value: string) => string | undefined;
    LengthEqualTo: (length: number) => (value: any) => string | undefined;
    LengthLessThan: (length: number) => (value: any) => string | undefined;
    LengthGreaterThan: (length: number) => (value: any) => string | undefined;
}

export const Validations : IValidations = {
    Required: value => value ? undefined : 'Required',
    GreaterThan: min => value => value == null || value < min ? `Must be greater than ${min}.` : undefined,
    LessThan: max => value => value == null || value > max ? `Must be less than ${max}.` : undefined,
    Number: value => value && isNaN(Number(value)) ? 'Must be a number.' : undefined,
    Email: value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address.' : undefined,
    PhoneNumber: value => value && !/^\(?([0-9]{3})\)?[-.● ]?([0-9]{3})[-.●]?([0-9]{4})$/i.test(value) ? 'Invalid phone number.' : undefined,
    LengthEqualTo: length => value => value == null || value.length !== length ? `Must be ${length} characters.` : undefined,
    LengthLessThan: max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined,
    LengthGreaterThan: min => value => value && value.length < min ? `Must be ${min} character(s) or more` : undefined
}