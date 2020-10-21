// IMPORTS ->
// Libraries
import * as $ from 'jquery';

import json from './assets/json.json';
import xml from './assets/data.xml';
import csv from './assets/data.csv';

// Images
import WebpackLogo from '@/assets/img/webpack-logo.png';

// Styles
import './styles/styles.css';
import './styles/styles.sass';

//JavaScript
import testJS from './js-test.js';
import testTS from './ts-test.ts';
import './babel-test.js';
// <- IMPORTS

// CODE ->
testJS();
testTS();

console.log('JSON:', json);
console.log('XML:', xml);
console.log('CSV:', csv);

// $('.text').css('background','purple');

let img = document.createElement('img');
img.src = WebpackLogo;
img.weight = '200';
img.height = '200';
$(img).css('display', 'block');
$(img).css('margin', '0 auto');

$('.title').append(img);
// <- CODE
