import * as d3 from 'd3';
import * as fs from 'fs';

const csvFile = fs.readFileSync(`data/trends.csv`, 'utf8');

const rawData = d3.csvParse(csvFile);

console.log(rawData);