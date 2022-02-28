import pagina from './pageObjectModel';

fixture('Pruebas de UI usando testcafe para practicas de Node.js')
    .page('https://devexpress.github.io/testcafe/example/');

    test('Prueba1: Abrir una pagina de pruebas', async t =>{
        await t
        .wait (100);
    });

    test('Prueba2: Escribir un texto ', async t =>{
        await t 
            .typeText(pagina.nameInput,'Tester')
            //Assertions
            .expect(pagina.nameInput.value).eql('Tester')
    });

    test('Prueba 3: Escribir numeros', async t =>{
        await t
            .typeText(pagina.nameInput,'230')
            //Assertions
            .expect(pagina.nameInput.value).eql('230')
            .expect(pagina.nameInput.value).notEql('Tester')
    });

    test('Prueba 4: Escribir signos', async t =>{
        await t 
            .typeText(pagina.nameInput, '¿?$5&@()')
            .expect(pagina.nameInput.value).eql('¿?$5&@()')
            .expect(pagina.nameInput.value).notEql('230')
    });

    test('Prueba 5: Usar una variable y un if dentro de mi prueba', async t=>{
        let variable = '76876';
        //console.log('typeof: ', typeof variable)
        await t
            .click(pagina.nameInput)
            if(typeof(variable)=='number'){
                console.log('Este objeto no permite numeros')
                await t
                .expect(pagina.nameInput.value).eql('')
            }else{
                await t
                    .typeText(pagina.nameInput, '76876')
                    .expect(pagina.nameInput.value).eql(variable)
            }   
         //console.warn('Wait Wait Wait')
        });

    test('Prueba 6: Escribir un texto y borrar y remplazar una sola letra', async t =>{
        await t 
            .expect(pagina.nameInput.value).eql('')
            .typeText(pagina.nameInput,'QA')
            .typeText(pagina.nameInput, 'Teter', { replace: true})
            .typeText(pagina.nameInput, 's', {caretPos: 2})

            //Assertions
            .expect(pagina.nameInput.value).notEql('Texter')
            .expect(pagina.nameInput.value).notEql('QA')
            .expect(pagina.nameInput.value).contains('Test')
            .expect(pagina.nameInput.value).eql('Tester')
    });

    test('Prueba 7: Escribir un texto, seleccionarlo y borrarlo y volver a escribirlo', async t =>{
        await t
            .expect(pagina.nameInput.value).eql('')
            .typeText(pagina.nameInput, 'Texter')
            .pressKey('ctrl+a delete')
            .typeText(pagina.nameInput, 'Tester')

            //Assertions
            .expect(pagina.nameInput.value).notEql('Texter')
            .expect(pagina.nameInput.value).notEql('QA')
            .expect(pagina.nameInput.value).contains('Test')
            .expect(pagina.nameInput.value).eql('Tester')
    });

    test('Prueba 8: Probar un click a un checkbox', async t =>{
        await t 
            .expect(pagina.checkbox1.checked).notOk()
            .click(pagina.checkbox1)
            .expect(pagina.checkbox1.checked).ok()

            //opcional: hace runa prueba con un if validando anetes si esta seleccionando o no el checkbox
    });

    test('Prueba 9: Probar que cada uno de los checkboxes es clickable', async t =>{
    for(const feature of pagina.featuresList){
        await t
            .click(feature.label)
            .wait(500)
            .expect(feature.checkbox.checked).ok();
    }
    });

    test('Prueba 10: Probar dar click en el radio button Windows', async t => {
        await t 
            .expect(pagina.radio_windows.checked).notOk()
            .click(pagina.radio_windows)
            .expect(pagina.radio_windows.checked).ok()
    });

    test('Prueba 13: Probar seleccionar un elemento de un menu', async t => {
        await t
            .click(pagina.menu)
            .click(pagina.javascript)

            .expect(pagina.javascript.exists).ok();
    });

    test('Prueba 14: Dar click en un checkbox para activar un area de texto', async t => {
        await t
            .click(pagina.triedCheckbox)
            .typeText(pagina.textArea, 'Primera linea')
            .typeText(pagina.textArea, '\nSegunda linea')
            .typeText(pagina.textArea, '\nTercera linea')
            .selectTextAreaContent(pagina.textArea,1,5)
            .pressKey('delete')
            
            .typeText(pagina.textArea, 'Reemplaza todo por esto', {replace:true})
            .expect(pagina.textArea.value).eql('Reemplaza todo por esto')
            .expect(pagina.textArea.value).notContains('linea')
    });

    test('Prueba 15: manejar un slider bar', async t =>{
        await t 
            .click(pagina.triedCheckbox)
            .dragToElement(pagina.slider.handler.pagina.slider)
    });