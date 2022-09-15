# Epic React Pro

## Advanced React Hooks

1. useReducer의 API와 다른 사용법

### 1. useReducer: simple Counter

-   01
    -   `useState`처럼 그냥 새값을 넣어 업데이트하게 쓸 수 있음
-   01.extra-1: accept the step as the action
    -   `useState`처럼 그냥 새값을 만드는 함수로 업데이트하게 쓸 수 있음
-   01.extra-2: simulate setState with an object
    -   class components의 `setState`처럼 사용할 수 있음
    -   state에 count property말고 다른 property가 있을 수도 있으므로 다른 property들을 복사하고 action이 가지고 있는 property만 새 값으로 덮어씌움
        ```javascript
        const countReducer = (state, action) => ({ ...state, ...action });
        ```
-   01.extra-3: simulate setState with an object OR function

    ```javascript
    const countReducer = (state, action) => ({
        ...state,
        ...(typeof action === "function" ? action(state) : action),
    });
    ```

-   01.extra-4: traditional dispatch object with a type and switch statement
-   Other notes: lazy initialization

    -   `useReducer`의 두번째 인자가 세번째 인자(함수)의 파라미터로 들어가서 return값이 state의 초기값이 됨

        ```javascript
        function init(initialStateFromProps) {
            return {
                pokemon: null,
                loading: false,
                error: null,
            };
        }

        // ...

        const [state, dispatch] = React.useReducer(reducer, props.initialState, init);
        ```

    -   `init`함수가 localStorage에서 값을 읽거나 리렌더링마다 하고 싶지 않은 경우 유용함
