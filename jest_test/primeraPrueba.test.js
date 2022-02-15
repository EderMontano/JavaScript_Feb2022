test ('Validar que una cadena contenga un texto', () =>{
    const palabra = 'Computadora';
    expect(palabra).toContain('Comp');
});

var listaDeCompras = ['coditos', 'arroz', 'estrellita', 'municiones']

test ('Validar que la lista de pruebas contiene arroz', () =>{
    expect(listaDeCompras).toContain('arroz');
});

test ('Validar que la lista de pruebas no contiene letras', () =>{
    expect(listaDeCompras).not.toContain('letras');
});

test('Validar un valor que no es nulo', () =>{
    var n = null;
    var z = 0;

    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();

    expect(z).not.toBeUndefined();
    expect(z).not.toBeNull();
})