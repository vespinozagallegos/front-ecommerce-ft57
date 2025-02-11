import { ILoginProps, ILoginPropsErrors, IRegisterProps, IRegisterPropsErrors } from "@/types";

export function validateLoginForm(values: ILoginProps) {
    const errors: ILoginPropsErrors = {};
    
    // validación email
    // Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.email) {
        errors.email = "Ingrese email";
    } else if (!emailRegex.test(values.email)) {       //emailRegex.test(values.email) testea si es valido = true (por eso !)
        errors.email = "El email no tiene un formato válido";
    }

    // Validación contraseña
    if (!values.password) {
        errors.password = "Ingrese contraseña";
    } else if (values.password.length < 8) {
        errors.password = "La contraseña debe tener al menos 8 caracteres";
    } else if (!/[A-Z]/.test(values.password)) {
        errors.password = "La contraseña debe incluir al menos una letra mayúscula";
    } else if (!/[a-z]/.test(values.password)) {
        errors.password = "La contraseña debe incluir al menos una letra minúscula";
    } else if (!/[0-9]/.test(values.password)) {
        errors.password = "La contraseña debe incluir al menos un número";
    }

    return errors;
    
};

export function validateRegisterForm(values: IRegisterProps) {
    const errors: IRegisterPropsErrors = {};

    // Validar email
    // Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.email) {
        errors.email = "Email es obligatorio";
    } else if (!emailRegex.test(values.email)) {       //emailRegex.test(values.email) testea si es valido = true (por eso !)
        errors.email = "El email no tiene un formato válido";
    }

    // Validar password
    if (!values.password) {
        errors.password = "La contraseña es obligatoria";
    } else if (values.password.length < 8) {
        errors.password = "La contraseña debe tener al menos 8 caracteres";
    } else if (!/[A-Z]/.test(values.password)) {
        errors.password = "La contraseña debe incluir al menos una letra mayúscula";
    } else if (!/[a-z]/.test(values.password)) {
        errors.password = "La contraseña debe incluir al menos una letra minúscula";
    } else if (!/[0-9]/.test(values.password)) {
        errors.password = "La contraseña debe incluir al menos un número";
    }

    // Validar name
    if (!values.name.trim()) {     //trim Elimina los espacios en blanco al inicio y al final del texto
        errors.name = "El nombre es obligatorio";
    } else if (/[^a-zA-ZáéíóúñÁÉÍÓÚÑ\s]/.test(values.name)) {   //incluye tildes y ñ
        errors.name = "El nombre solo debe contener letras y espacios";
    } else if (values.name.trim().length < 2) {
        errors.name = "El nombre debe tener al menos 2 caracteres";
    }

    // Validar address
    if (!values.address.trim()) {
        errors.address = "La dirección es obligatoria";
    } else if (/[^a-zA-Z0-9áéíóúñÁÉÍÓÚÑ\s]/.test(values.address)) {
        errors.address = "La dirección solo debe contener letras, números y espacios";
    }

    // Validar phone
    if (!values.phone.trim()) {
        errors.phone = "El número de teléfono es obligatorio";
    } else if (!/^\d+$/.test(values.phone)) {
        errors.phone = "El número de teléfono solo debe contener números";
    } else if (values.phone.trim().length < 6) {
        errors.phone = "El número de teléfono debe tener al menos 6 dígitos";
    }

    return errors;

};