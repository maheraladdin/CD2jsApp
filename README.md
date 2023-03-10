# CD2js

![CD2js background](CD2js.gif)

## simple example

<img src="classDigramToJSCode.png" alt="turn class digram into javascript code"/>

## Agent Design (PEAS)

<table>
    <tr>
        <th>Performance</th>
        <td>Fast ,minimize cost ,maximize accurate</td>
    </tr>
    <tr>
        <th>Environment</th>
        <td>Mobile ,digital photos ,Papers</td>
    </tr>
    <tr>
        <th>Actuators</th>
        <td>Turn class diagrams into javascript code</td>
    </tr>
    <tr>
        <th>Sensors</th>
        <td>Cameras ,include file input field</td>
    </tr>
</table>

## Environment properties (ODESDA)
<table style="text-align: center;">
    <tr>
        <th>Observable</th>
        <th>Deterministic</th>
        <th>Episodic</th>
        <th>Static</th>
        <th>Discrete</th>
        <th>Agent</th>
    </tr>
    <tr>
        <td>Yes</td>
        <td>No</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Single</td>
    </tr>
</table>

## Agent type 
<table>
    <tr>
        <th>Agent type</th>
        <td>learning agent</td>
        <td>
            OCR systems use machine learning to recognize handwritten and printed text.
        </td>
    </tr>
</table>

## Install

```sh
npm i cd2js
```

## Usage

```js
const useCD2js = require('cd2js');

// setData is a function that set data to state
// you can find apiKey in https://ocr.space/ocrapi
// OCREngine is a number that represent the OCR engine that you want to use

useCD2js(imagePath, setData, apiKey, OCREngine);
```

