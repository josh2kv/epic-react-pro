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

### Creating custom components

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
