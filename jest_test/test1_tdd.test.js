
const impresion = requiere('./impresion');

TestWatcher('Validar que se imprima una cadena de texto', ()=>{
    expect(impresion.holaMundo()).toBe('¡Hola Mundo!');
});