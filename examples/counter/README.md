# 🏠 [Home](../../) / [Examples](../) / Counter

## Counter

<!-- prettier-ignore-start -->
| callbag | most | RxJS | xstream |
| --- | --- | --- | --- |
| [`code`](https://git.io/fAZ1q) [`live`](https://codesandbox.io/s/github/fanduel-oss/refract/tree/master/examples/counter/callbag) | [`code`](https://git.io/fAZ1m) [`live`](https://codesandbox.io/s/github/fanduel-oss/refract/tree/master/examples/counter/most)  | [`code`](https://git.io/fAZ1Y) [`live`](https://codesandbox.io/s/github/fanduel-oss/refract/tree/master/examples/counter/rxjs)  | [`code`](https://git.io/fAZ1O) [`live`](https://codesandbox.io/s/github/fanduel-oss/refract/tree/master/examples/counter/xstream)  |
<!-- prettier-ignore-end -->

This basic example involves a `counter` which the user can toggle between `incrementing`, `decrementing`, and `paused` states. The parent component has a simple state: `{ counter: 0, direction: 'NONE' }`. The buttons in the UI alter the `direction` state.

#### Aperture

Two sources are observed:

*   The `setDirection` callback function.
*   An interval which dispatches a new number every second.

Every time `setDirection` is called, the value it was called with is dispatched.

These two sources are then merged; the resulting stream contains a new effect every second, which contains the current direction as its `type`.

#### Handler

Simply increments or decrements the state whenever an effect is dispatched with the correct effect type.

#### Result

The end result is a counter which infinitely counts upwards after the user clicks `increase`, infinitely counts downwards after the user clicks `decrease`, or stays static after the user clicks `pause`.
