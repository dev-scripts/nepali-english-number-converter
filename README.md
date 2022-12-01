# Nepali English Number Converter 
This package converts number form Nepali to English and English to Nepali. 

## Installation
**Install using `npm `**
```javascript
npm install nepali-english-number-converter --save
```

**Or if you prefer using `yarn`**

```
yarn add nepali-english-number-converter --save
```

## Usage

### Import package in the Node project

```javascript
const convert = require("nepali-english-number-converter")
```

### Convert number
Convert function accept two parameters. One is acutal number (`number` or `string`) and another is type. Type can be `TO-NP` or `TO-EN`. These options are not case sensative.
1. **Convert number form English to Nepali**

```javascript
console.log(convert(123, 'TO-NP'));

Output : १२३

console.log(convert(12345.05, "to-np"));

Output : २,३४५.०५
```

2. **Convert number form Nepali to English**

```javascript
console.log(convert("१२३", "to-EN"));

Output : 123

console.log(convert("१२,३४५.०५", "TO-EN");

Output : 12345.05
```

## API

`convert(number, type)`

| Param         | Type                              |Description|
| ------------- | --------------------------------- |-----------|
| number        | `string` or `number`              | Input number to be converted.|
| type          | `string` : `TO-NP` or `TO-EN`     | Type number to be converted. |

**Example**

`example.js`
```javascript
const convert = require("nepali-english-number-converter")
console.log(convert(123, 'TO-NP'));
```

`Output : १२३`
