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

const LangUk = require('./lang-uk_m');                   // повний аналіз
const TokenizerUk = require('./tokenizer-uk_m');         // забезпечує токенізацію документів (розбиття на лексеми);
const StemmerUk = require('./stemmer-uk_m');             // це процес скорочення слова до основи шляхом відкидання
                                                       // допоміжних частин, таких як закінчення або суфікса
const StopwordsUk = require('./stopwords-uk_m');         // слова, які зустрічаються в мові надто часто, щоб
                                                       // нести якусь важливу інформацію
const NormalizerUk = require('./normalizer-uk_m');       // відкидання невідомих символів
const SentimentUk = require('./sentiment/sentiment_uk_m'); // аналіз тональності почуття

module.exports = {
  LangUk,
  StemmerUk,
  StopwordsUk,
  TokenizerUk,
  NormalizerUk,
  SentimentUk,
};
