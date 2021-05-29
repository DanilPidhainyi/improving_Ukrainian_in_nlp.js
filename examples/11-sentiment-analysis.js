/*
 * Copyright (c) AXA Group Operations Spain S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

//const { Container } = require('../../@nlpjs/core/src');
//const { SentimentAnalyzer } = require('../../@nlpjs/sentiment/src');
//const { LangUk } = require('../../@nlpjs/lang-uk_m/src');
const { Container } = require('../node_modules/@nlpjs/core');
const { SentimentAnalyzer } = require('../node_modules/@nlpjs/sentiment');
const { LangUk } = require('../node_modules/@nlpjs/lang-uk_m/src');

async  function sentiment_analyzer(input={ locale: 'uk', text: 'Я люблю котів' })  {
  const container = new Container();
  container.use(LangUk);
  const sentiment = new SentimentAnalyzer({ container });
  const result = await sentiment.process(input);
  return result.sentiment;
};
console.log(sentiment_analyzer());;
exports.sentiment_analyzer = sentiment_analyzer;

// output:
// {
// score: 2,
//     numWords: 3,
//     numHits: 1,
//     average: 0.6666666666666666,
//     type: 'afinn',
//     locale: 'uk',
//     vote: 'positive'
// }
