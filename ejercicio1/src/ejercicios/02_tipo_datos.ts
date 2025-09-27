let caracateristicas: string[]= ["alto", "inteligente"];


interface PersonaInterface{
    nombre: string;
    edad: number;
    caracateristicas?: string[];
}

const persona: PersonaInterface = {
    nombre: "Diego",
    edad: 40,
    caracateristicas: caracateristicas,
};

console.log({persona});
export{};