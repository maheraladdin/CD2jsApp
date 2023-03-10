import getJSCode from './getJSCode';
import * as Clipboard from 'expo-clipboard';

const cd2js = async (img) => {

    const myHeaders = new Headers();
    myHeaders.append("apikey", "K81045846988957");

    const formData = new FormData();
    formData.append("language", "eng");
    formData.append("base64Image", img);
    formData.append("scale", "true");
    formData.append("isTable", "true");
    formData.append("OCREngine", "5");

    // Clipboard.setStringAsync(JSON.parse(result).ParsedResults[0].ParsedText) &&

    await fetch("https://api.ocr.space/parse/image", {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    }).then(response => response.text())
        .then(result => Clipboard.setStringAsync(getJSCode(JSON.parse(result).ParsedResults[0].ParsedText)))
        .catch(error => console.log('error', error));
}

export default cd2js;