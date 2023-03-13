import getJSCode from './getJSCode';
import * as Clipboard from 'expo-clipboard';

const cd2js = async (img) => {

    // Header object stores the headers to the post request
    const myHeaders = new Headers();
    myHeaders.append("apikey", "K81045846988957");

    // FormData object stores the body to the post request
    const formData = new FormData();
    formData.append("language", "eng");
    formData.append("base64Image", img);
    formData.append("scale", "true");
    formData.append("isTable", "true");
    formData.append("OCREngine", "5");

    // send the image in base64 format as a post request to response the recognized text and store it in the clipboard
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