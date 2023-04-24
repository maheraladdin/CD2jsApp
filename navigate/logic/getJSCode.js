const getJSCode = (text) => {

    // fetch class name form recognized text
    const className = text
        .split("\n")
        .filter((item) => !item.includes("+"))[0]
        .match(/\w{2,}/);

    // fetch class properties form recognized text
    const classProperties = text
        .split("\n")
        .filter((item) => item.includes("+") && !item.includes("("));

    // fetch class methods
    const classMethods = text
        .split("\n")
        .filter((item) => item.includes("+") && item.includes("(") && item.includes(")"));

    // fetch class methods' parameters
    const params = classMethods
        .map(e => e.match(/\((.*?)\)/g));

    // generate javascript code in clean format and store it
    const jsCode = isNaN(Number(className[0])) ?
        `/*
recognized text:

${text}
*\\\n
class ${className} {
\n\tconstructor(${classProperties.map(e=> e.match(/\w+/)).filter(e=>e !== "").join(",")}) {
${classProperties.map(e=> `\t\tthis.${e.match(/\w+/)} = ${e.match(/\w+/)};`).join("\n")}\n\t}\n
${classMethods.map((e,i) => `\t${e.match(/\w+/) + params[i]} {\n\n\t}\n\n`).join("")}}` : `// js code can't be recognized`

    // return javascript code
    return jsCode;
}

export default getJSCode;