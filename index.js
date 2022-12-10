import * as d3 from 'd3';
import * as fs from 'fs';


const filesToRead = fs.readdirSync('data');
console.log(filesToRead);

filesToRead.map((csvFileName) => {
    let csvFile = fs.readFileSync(`data/${csvFileName}`, 'utf8');
    let rawData = d3.csvParse(csvFile);

    let parse = d3.timeParse("%Y%m");

    let parsedData = rawData.map(d => {
        d["Month"] = parse(d["Month"]);
        d["Video length in S"] = parseInt(d["Video length in S"]); 
        return d;
    });


})
