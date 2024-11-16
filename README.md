# React Concurrent Rendering

1. React Concurrent Rendering is a feature in React that allows it to work on multiple tasks simultaneously without blocking the user interface (UI)

2. In the previous version below react 18.React was rendering the component in a synchronous manner because of that if there is a large rendering task the ui gets laggy and unresponsive to the user.Where users cannot interact with Application immediately.

3. React's concurrent rendering is the solution to this problem. The newly introduced hooks, useTransition and useDeferredValue, help distinguish updates as having higher and lower priority in their execution.

4. useTransition is used to mark less priority task that render in background without blocking the main ui.
5. useDefferend value is used to add delay to rendering of last list of data in component. eg:- search filter
