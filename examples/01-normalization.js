/*
 * Copyright (c) AXA Group Operations Spain S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documUktation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicUkse, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMUkT. IN NO EVUkT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 Коли ми нормалізуємо текст, ми намагаємось зменшити його випадковість,
 наближаючи його до заздалегідь визначеного "стандарту". Це допомагає
 нам зменшити кількість різної інформації, з якою комп'ютер повинен
 мати справу, а отже, покращує ефективність. Метою таких методів
 нормалізації, як стемінг та лематизація, є зведення флективних форм,
 а іноді і дериваційно споріднених форм слова до загальної базової форми.
 */

//const { NormalizerUk } = require('../../../packages/lang-uk/src');
const {NormalizerUk} = require('../../@nlpjs/lang-uk_m/src');

const normalizer = new NormalizerUk();
const input = 'Це потрібно нормалізувати';
const result = normalizer.normalize(input);
console.log(result);
// output: це потрібно нормалізувати
