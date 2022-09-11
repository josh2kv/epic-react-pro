# Epic React Pro

## React fundamentals

1. vanilla JS로 elements 렌더링하기
2. React(Without JSX)로 elements 렌더링하기
3. React(Wit JSX)로 elements 렌더링하기
4. Custom Component 만들기
5. CSS Framework처럼 Styling하기
6. Form 다루기

### 1. Basic JavaScript-rendered Hello World

### 2. Intro to raw React APIs

-   02
    -   React: React elements를 만듬. ex) document.createElement()
    -   ReactDOM: React element를 렌더링. ex) rootElement.append()
    -   React에서 DOM nodes를 만드는 부분 [ReactDOMComponent.js](https://github.com/facebook/react/blob/48907797294340b6d5d8fecfbcf97edf0691888d/packages/react-dom/src/client/ReactDOMComponent.js#L416)

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

### 4. Creating custom components

-   04

    -   Components: 렌더링할 수 있는 무언가(React elements, strings, null, numbers 등)를 return하는 function

-   04-extra-1: using a custom component with React.createElement

    -   `React.createElement(Components, {props})`

-   04-extra-2: using a custom component with JSX

    -   Babel은 JSX를 compile할 때 Components name의 형태를 보고 이 것을 Components로 볼 지 String으로 볼 지 정함

        ```javascript
        ui = <Capitalized /> // ✅ React.createElement(Capitalized)
        ui = <property.access /> // ✅ React.createElement(property.access)
        ui = <Property.Access /> // ✅ React.createElement(Property.Access)
        ui = <Property['Access'] /> // ❌ SyntaxError
        ui = <lowercase /> // ❌ React.createElement('lowercase')
        ui = <kebab-case /> // ❌ React.createElement('kebab-case')
        ui = <Upper-Kebab-Case /> // ❌ React.createElement('Upper-Kebab-Case')
        ui = <Upper_Snake_Case /> // ✅ React.createElement(Upper_Snake_Case)
        ui = <lower_snake_case /> // ❌ React.createElement('lower_snake_case')
        ```

-   04-extra-3: Runtime validation with PropTypes

    -   props를 검증할 수 있는 `Components.propTypes`가 제공되고 각 props의 대한 validation function은 원래 직접 만들어야 함

        ```javascript
        function FavoriteNumber({ favoriteNumber }) {
            return <div>My favorite number is: {favoriteNumber}</div>;
        }

        const PropTypes = {
            number(props, propName, componentName) {
                if (typeof props[propName] !== "number") {
                    return new Error("Some useful error message here");
                }
            },
        };

        FavoriteNumber.propTypes = {
            favoriteNumber: PropTypes.number,
        };
        ```

    -   `Components.propTypes`는 성능저하를 초래하므로 production환경에서는 실행되지 않음

-   04-extra-4: Use the prop-types package

    -   react team에서 `prop-types`라는 package를 따로 직접 관리하고 제공함

-   04-extra-5: using React Fragments

### 5. Styling

-   05

    -   `style` prop의 property들은 [`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration)와 매칭됨

-   05-extra-1: Create a custom component
    ```javascript
    function Box({ style, className = "", ...otherProps }) {
        return <div className={`box ${className}`} style={{ fontStyle: "italic", ...style }} {...otherProps} />;
    }
    ```
-   05-extra-12: Accept a size prop to encapsulate styling

### 6. Forms

-   06
    -   input value를 얻는 3가지 방법
        -   by index: `event.target.elements[0].value`
        -   by name or id attribute: `event.target.elements.usernameInput.value`
        -   by `ref`: `inputRef.current.value`
    -   error message를 출력하는 element에는 screen reader 사용자를 위해 `role="alert"`을 추가하는 것이 좋음
-   06-extra-1: Validate lower-case
-   06-extra-2: Control the input value
    -   input value를 직접 컨트롤하고 싶으면 `value` property를 사용

### 7. Rendering Arrays

-   07
    -   array를 렌더링 할 때는 각 element마다 unique `key` prop을 제공해야 list가 엉키지 않는다.
    -   특히, 각 element내에 state를 가지고 있으면 문제가 발생
    -   `key`는 array내에서만 unique하면 됨
    -   `key`가 제공되지 않으면 React는 array index가 제공된 것처럼 변화 전후를 비교해서 렌더링 함
-   07-extra-1: Focus Demo
    -   list 중 하나의 input에 fucus를 뒀을 때 'without a key'와 'with array index'는 input의 위치가 바꿔어도 그자리에 남아있음. 하지만 'With a proper key'는 바뀌는 input 위치를 따라감
