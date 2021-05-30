# Курсова робота з курсу "Інженерія ПЗ"

<h2>На тему "Підтримка української мови в пакеті nlp.js"</h2>

<h3> 
    Виконав:<br>
    студент 2-го курсу<br>
    групи ІВ-93<br>
    Підгайний Данило
</h3>

## Встановлення

Спочатку встановіть бібліотеку [`nlp.js`](https://github.com/axa-group/nlp.js/tree/master/packages) <br>
	```bash
		npm install node-nlp
	``` <br><br>
Потім доповнення [`improving_ukrainian_in_nlp`](https://github.com/DanilPidhainyi/improving_Ukrainian_in_nlp.js) <br>
	```bash
		npm i improving_ukrainian_in_nlp
	``` <br><br>
Готово


## Приклади використання

Приклад на основі [`/examples/02-qna-classic`](https://github.com/axa-group/nlp.js/tree/master/examples/02-qna-classic).
Тут ми навчаємо бота і зберігаємо модель у файл. При повторному запуску бота модель завантажується, а не тренується знову.


```javascript
const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['uk_m'], forceNER: true });
// Adds the utterances and intents for the NLP
manager.addDocument('uk_m', 'Допобачення', 'greetings.bye');
manager.addDocument('uk_m', 'Бувай', 'greetings.bye');
manager.addDocument('uk_m', 'Гарної дороги', 'greetings.bye');
manager.addDocument('uk_m', 'Гарного дня', 'greetings.hello');
manager.addDocument('uk_m', 'Привіт', 'greetings.hello');
manager.addDocument('uk_m', 'Доброго дня', 'greetings.hello');
manager.addDocument('uk_m', 'Здраствуй', 'greetings.hello');
manager.addDocument('uk_m', 'Ласкаво просимо', 'greetings.hello');

// Train also the NLG
manager.addAnswer('uk_m', 'greetings.bye', 'До наступного разу');
manager.addAnswer('uk_m', 'greetings.bye', 'До зустрічі');
manager.addAnswer('uk_m', 'greetings.hello', 'Як справи');
manager.addAnswer('uk_m', 'greetings.hello', 'Вітаю');

// Train and save the model.
(async() => {
    await manager.train();
    manager.save();
    const response = await manager.process('uk_m', 'Гарного дня');
    console.log(response);
})();
```

У консолі ми отримаємо:

```bash
{
  locale: 'uk_m',
  utterance: 'Гарного дня',
  settings: undefined,
  languageGuessed: false,
  localeIso2: 'uk',
  language: 'Ukrainian',
  explanation: [ { token: '', stem: '##exact', weight: 1 } ],
  classifications: [
    { intent: 'greetings.hello', score: 1 },
    { intent: 'greetings.bye', score: 0 }
  ],
  intent: 'greetings.hello',
  score: 1,
  domain: 'default',
  sourceEntities: [],
  entities: [],
  answers: [
    { answer: 'Як справи', opts: undefined },
    { answer: 'Вітаю', opts: undefined }
  ],
  answer: 'Вітаю',
  actions: [],
  sentiment: {
    score: 0,
    numWords: 0,
    numHits: 0,
    average: 0,
    type: undefined,
    locale: 'uk_m',
    vote: 'neutral'
  }
}
```