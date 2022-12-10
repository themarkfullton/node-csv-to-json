import * as d3 from 'd3';
import * as fs from 'fs';

const filesToRead = fs.readdirSync('data');
console.log(filesToRead);

filesToRead.forEach((csvFileName) => {
    let csvFile = fs.readFileSync(`data/${csvFileName}`, 'utf8');
    let rawData = d3.csvParse(csvFile);
    console.log(rawData);
})
