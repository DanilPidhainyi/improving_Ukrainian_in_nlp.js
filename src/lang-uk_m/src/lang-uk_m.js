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

const TokenizerUk = require('./tokenizer-uk_m');
const StemmerUk = require('./stemmer-uk_m');
const StopwordsUk = require('./stopwords-uk_m');
const NormalizerUk = require('./normalizer-uk_m');
const SentimentUk = require('./sentiment/sentiment_uk_m');
const registerTrigrams = require('./trigrams');

class LangUk {
  register(container) {
    container.use(TokenizerUk); // сленги
    container.use(StemmerUk);  // виділення корення
    container.use(StopwordsUk); // слова які не нисуть змісту
    container.use(NormalizerUk); // спрощення тексту
    container.register('sentiment-uk', SentimentUk); // почуття, емоції
    registerTrigrams(container); // кирилиця, визначення іменників, прикметників
  }
}

module.exports = LangUk;
