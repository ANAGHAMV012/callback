import {createButton} from './script18widget.js';
createButton('Feature 1', () => {
    alert('feature 1'); 
});
createButton('Feature 2', async() => {
    // import ('./script18feature.js')
    //     .then((obj) => {
    //         createButton('Start Disco', obj.changeBg);
    //         createButton('Stop Disco', obj.stopChangingBg);
    //     })

    const obj = await import('./script18feature.js');
    createButton('Start Disco', obj.changeBg);
    createButton('Stop Disco', obj.stopChangingBg);
});