## 환경설정

1. npm i node-sass
2. package.json - scripts - "node-sass": "node-sass",
3. "sass": "node-sass -wr --source-map styles/main.scss style.css" (w: watch, r: recursive)

4. npm install -D stylelint stylelint-config-recess-order stylelint-config-standard stylelint-scss

5. .stylelintrc.json 생성

.stylelintrc.json 파일 추가

[.stylelintrc.json](https://gist.github.com/kbu715/af0a5da08391401e16c99c21c1ec5004)

6. .prettierrc 파일 생성

```json
{
  "semi": false,
  "singleQuote": true,
  "endOfLine": "lf",
  "tabWidth": 2,
  "useTabs": false
}
```

---

## HTML Document 셋업

1.

한국어를 사용하고 대한민국에서 사용된다.

```html
<html lang="ko-KR"></html>
```

2. font

[fonts.google.com](fonts.google.com) - Noto Sans KR

```html
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
  rel="stylesheet"
/>
```

## Icon Font 생성

`Icomoon`: Icon Font generator [https://icomoon.io/app/#/select](https://icomoon.io/app/#/select)

## Favicon 설정

[Favicon Generator](https://realfavicongenerator.net/)

## reset css 적용

\_normalize.scss
\_reset.scss

## font smoothing (mdn 검색)

```css
* {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
```

## 생각을 정리합시다

| Mobile | Tablet | Desktop | class        |
| ------ | ------ | ------- | ------------ |
| O      | X      | X       | `.sm-only`   |
| O      | O      | X       | `.lg-hidden` |
| X      | O      | X       | `.md-only`   |
| X      | O      | O       | `.sm-hidden` |
| X      | X      | O       | `.lg-only`   |
| O      | X      | O       | `.md-hidden` |
