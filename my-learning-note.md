# Epic React Pro

## React fundamentals

1. vanilla JS로 elements 렌더링하기
2. React(Without JSX)로 elements 렌더링하기
3. React(Wit JSX)로 elements 렌더링하기

### 1. Basic JavaScript-rendered Hello World

### 2. Intro to raw React APIs

-   02
    -   React: React elements를 만듬. ex) document.createElement()
    -   ReactDOM: React element를 렌더링. ex) rootElement.append()

### 3. Using JSX

-   03

    -   JSX는 Babel을 통해 vanilla JS로 컴파일 됨(JSX를 vanilla JS로 생각해보는 훈련하길 강력히 권함)
    -   Bebel로 컴파일하기 위해 `script` tag의 type을 'text/babel'로 해줘야 함

    ```html
    <script type="text/babel"></script>
    ```

-   03-extra-2
    -   React elements에 props 묶어서 한번에 전달하기
    ```javascript
    const className = "container";
    const children = "Hello World";
    const props = { children, className };
    const element = <div {...props} />;
    ```
