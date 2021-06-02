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


const { Normalizer } = require('@nlpjs/core');

/**
 * <pre>
 * NormalizerUk - це клас для нориалізації тексту
 *
 * Текст переводиться до нижнього регістру
 * та замінюються спеціальні символи.
 * Наприклад літери з наголосом.
 * </pre>
 *
 * @author DanilPidhainyi
 * @exports NormalizerUk
 *
 */
class NormalizerUk extends Normalizer {
  constructor(container) {
    super(container);
    this.name = 'normalizer-uk_m';
  }

  /**
   *
   * Нормалізує текс для наступних алгоритмів
   *
   * @param {string} text - сирий текст
   *
   * @example
   *
   * NormalizerUK.normalize('З цим Потрібно попрацювати')
   * // -> 'з цим потрібно попрацювати'
   * @return {string}
   */

  normalize(text) {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  run(srcInput) {
    const input = srcInput;
    input.text = this.normalize(input.text, input);
    return input;
  }
}

module.exports = NormalizerUk;
