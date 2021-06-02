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
const { Tokenizer } = require('@nlpjs/core');

class TokenizerUk extends Tokenizer {

  /**
   * <pre>
   * TokenizerUk - це клас для токенізації речень
   *
   * Токенізація - це процес розбиття тексту на список токенов.
   * Можна розглядати токен як частини, подібні речі,
   * це токен в реченні, а пропозиція є токеном в абзаці.
   * </pre>
   *
   * @author DanilPidhainyi
   * @exports TokenizerUk
   *
   * @example
   *
   * TokenizerUk.tokenize('Це потрібно токенізувати')
   * // -> ['Це', 'потрібно', 'токенізувати']
   * @param {string}
   * @return {Array}
   *
   */

  constructor(container, shouldTokenize) {
    super(container, shouldTokenize);
    this.name = 'tokenizer-uk_m';
  }
}

module.exports = TokenizerUk;