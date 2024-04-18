import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export async function promptNewUser() {
    return await inquirer.prompt(newUserPrompt);
}

const newUserPrompt = [
    {
        type: "rawlist",
        name: "category",
        message: "Seleccione categoría:",
        choices: ['Almacén', 'Carnicería', 'Verdulería', 'Salud', 'Ocio', 'Transporte', 'Formación', 'Servicio', 'Otro']
    },
    {
        type: "input",
        name: "details",
        message: "Ingrese el detalle de su gasto:"
    },
    {
        type: "date",
        name: "day",
        message: "Ingrese fecha del gasto:",
        locale:"es-ES",
        format: {month:"short", hour: undefined, minute: undefined},
    },
    {
        type: "number",
        name: "amount",
        message: "Ingrese importe:"
    },
];