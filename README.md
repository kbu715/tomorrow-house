<center><img src="/assets/images/Logo.svg" width="300" height="auto"></center>
# 내일의 집

### 1. GNB

- 로그인을 하지 않은 경우

![로그인하지않은경우](https://user-images.githubusercontent.com/63832678/130351090-75313826-5874-4f24-a2ac-ec7b0d54daca.png)

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>
  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="장바구니 페이지로 이동"
  >
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인을 한 경우

![로그인한경우](https://user-images.githubusercontent.com/63832678/130351064-395f4a17-5751-447f-9608-649bb0de984b.png)

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a
    class="gnb-icon-button sm-hidden"
    href="/"
    aria-label="스크랩북 페이지로 이동"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    class="gnb-icon-button sm-hidden"
    href="/"
    aria-label="내 소식 페이지로 이동"
  >
    <i class="ic-bell"></i>
  </a>

  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="장바구니 페이지로 이동"
  >
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="마이메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="사달라 아저씨" />
    </div>
  </button>
</div>
```

### 2. 환경설정

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

#### HTML Document 셋업

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

#### Icon Font 생성

`Icomoon`: Icon Font generator [https://icomoon.io/app/#/select](https://icomoon.io/app/#/select)

#### Favicon 설정

[Favicon Generator](https://realfavicongenerator.net/)

#### reset css 적용

\_normalize.scss
\_reset.scss

#### font smoothing (mdn 검색)

```css
* {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
```

#### responsive class naming

| Mobile | Tablet | Desktop | class        |
| ------ | ------ | ------- | ------------ |
| O      | X      | X       | `.sm-only`   |
| O      | O      | X       | `.lg-hidden` |
| X      | O      | X       | `.md-only`   |
| X      | O      | O       | `.sm-hidden` |
| X      | X      | O       | `.lg-only`   |
| O      | X      | O       | `.md-hidden` |
