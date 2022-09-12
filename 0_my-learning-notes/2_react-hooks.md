# Epic React Pro

## React Hooks

1. useState로 상태업데이트하기
2. useEffect 사용하기 , custom hooks 만들기

### 1. useState: greeting

-   01
-   01-extra-1: accept an initialName

### 2. useEffect: persistent state

-   02
-   02-extra-1: lazy state initialization
    -   ??: 왼쪽값이 `null` or `undefined`일 때 오른쪽값 return
    -   ||: 왼쪽값이 falsy value일 때 오른쪽값 return
-   02-extra-2: effect dependencies
-   02-extra-3: custom hook
    -   hooks가 포함되는 반복되는 로직을 함수에 담은 것
    -   use로 시작
-   02-extra-4: flexible localStorage hook
    -   customized serialize/deserialize를 제공할 수 있도록 해당 parameter가 추가된 듯
        ```javascript
        function useLocalStorageState(key, defaultValue = '', {serialize = JSON.stringify, deserialize = JSON.parse} = {}) { ... }
        ```
    -   default value가 함수로 제공되는 경우도 고려
        ```javascript
        return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        ```
