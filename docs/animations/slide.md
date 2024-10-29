# Slide Animations

Use classname `slide-(in|out)-<direction>-<value>` to define animation's `translate`.

- The `-<value>` part is ***optional***.
- You can optionally use `slide-in-from` / `slide-out-to` instead of `slide-in` / `slide-out` to make it more readable

<br />

You can use either of below as the `<direction>`:

- `top`
- `bottom`
- `left`
- `right`

::: tip
`top` / `bottom` and `left` / `right` can be used together.

| y-axis Direction | x-axis Direction | Result |
|------------------|------------------|--------|
| `top`      | `left`     | ↖️     |
| `top`      | `right`    | ↗️     |
| `bottom`   | `left`     | ↙️     |
| `bottom`   | `right`    | ↘️     |

For example the following combination will make the element slide in from `top-left` corner. [Playground](https://unocss.dev/play/?version=0.62.1&html=DwEwlgbgBAxgNgQwM5ILwCIAWBaJMBOApoQHZQDm%2BYIUADojIdmAC6EC2S2jJb%2B6APgBQUKMABGAVxYsA9mXjI06BCTDsEbZmSRxqTMCWxza2AIwB6AExRd%2B7djiEAZi2wAWKM4QgDRgAxQquqaTL6IAJ7m-jFBahpaIJL4mmDy0bHisvi%2B%2BHTYNviykiS%2BII7kgiKiUABC0nJkAILVwBZSMvLCbeAQwkA&config=JYWwDg9gTgLgBAbzmKBTAzqmA1YA7YAYwFc9CBDOAXzgDMoIQ4ByAAQDd8jSKB6UiIXToAtCgxYRnAiTLlmAbgBQoSLERwAJqlr5UAYQh5dAcwA0yNJhgBVPBGp0GTZgKHpFSpagAea%2BNq05MQANgE6eobGwCYAFAhKcJYSMOgAXHAA2olJydZ2ELEAlGY5SeLWuDI85PFlubohIQCyENoZzABGEDAAFswWvLxw0HAA7r3kMKjsqFAjYDDARuhwAJ4QxOPkeDD1VCU5ALqlBwpAA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4IgLgTghgdgzgMwPYQLYAkyoDYgFwJTZwCmAvkA)

```html
<button class="animate-in slide-in-top-1/2 slide-in-left-4">Button A</button>
```
:::

<br />

You can use either of below as the `<value>`:

- Any number including negative(⚠️) and decimals. e.g. `slide-in-top-50`
- Any percentage including negative(⚠️) and decimals. e.g. `slide-in-top-66.6%`
- Any fraction including negative(⚠️). e.g. `slide-in-top-1/2`
- `full` as `100%`. e.g. `slide-in-top-full`
- CSS variable. e.g. `slide-in-top-$my-css-var`

::: warning
Using ***NEGATIVE*** value is discouraged. Although it will work as expected, but can be misleading or hard to understand.

You can always switch to the opposite direction to avoid using negative values:

```html
<button class="animate-in slide-in-top--4">Button A</button>
<button class="animate-in slide-in-bottom--8">Button B</button>
```

is equivalent to
```html
<button class="animate-in slide-in-bottom-4">Button A</button>
<button class="animate-in slide-in-top-8">Button B</button>
```
Note: `CSS variable` usages will be placed as is **WITHOUT** any direction or positive / negative check.
:::

## Slide In

Define enter animation's starting `translate`.

- The default **value** is `100%` if not specified.

```html
<button class="animate-in slide-in-top">Button B</button>
<button class="animate-in slide-in-from-top">Button D</button>
<button class="animate-in slide-in-top-4">Button E</button>
<button class="animate-in slide-in-top-50%">Button F</button>
<button class="animate-in slide-in-top-2/3">Button G</button>
<button class="animate-in slide-in-top-full">Button H</button>
<button class="animate-in slide-in-top-$my-css-var">Button I</button>
```

<table>
  <thead>
    <tr>
      <th>Classname</th>
      <th>Property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>slide-in-top</code></td>
      <td rowspan="3"><code>--vin-enter-translate-y: -100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-from-top</code></td>
    </tr>
    <tr>
      <td><code>slide-in-top-full</code></td>
    </tr>
    <tr>
      <td><code>slide-in-bottom</code></td>
      <td><code>--vin-enter-translate-y: 100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-left</code></td>
      <td><code>--vin-enter-translate-x: -100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-right</code></td>
      <td><code>--vin-enter-translate-x: 100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-bottom-10</code></td>
      <td><code>--vin-enter-translate-y: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-bottom-48%</code></td>
      <td><code>--vin-enter-translate-y: 48%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-bottom-.8</code></td>
      <td><code>--vin-enter-translate-y: 0.2rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-bottom-52.1</code></td>
      <td><code>--vin-enter-translate-y: 13.025rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-bottom-66.6%</code></td>
      <td><code>--vin-enter-translate-y: 66.6%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-bottom-100</code></td>
      <td><code>--vin-enter-translate-y: 25rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-bottom--20</code> ⚠️</td>
      <td><code>--vin-enter-translate-y: -5rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-bottom--48%</code> ⚠️</td>
      <td><code>--vin-enter-translate-y: -48%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-bottom--66.66</code> ⚠️</td>
      <td><code>--vin-enter-translate-y: -16.665rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-top--20</code> ⚠️</td>
      <td><code>--vin-enter-translate-y: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-top--48%</code> ⚠️</td>
      <td><code>--vin-enter-translate-y: 48%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-top--66.66</code> ⚠️</td>
      <td><code>--vin-enter-translate-y: 16.665rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-bottom-1/3</code></td>
      <td><code>--vin-enter-translate-y: 33.3333333333%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-bottom--2/3</code> ⚠️</td>
      <td><code>--vin-enter-translate-y: -66.6666666667%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-top--2/3</code> ⚠️</td>
      <td><code>--vin-enter-translate-y: 66.6666666667%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-bottom-full</code></td>
      <td><code>--vin-enter-translate-y: 100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-in-top-$my-css-var</code></td>
      <td rowspan="2"><code>--vin-enter-translate-y: var(--my-css-var);</code></td>
    </tr>
    <tr>
      <td><code>slide-in-bottom-$my-css-var</code></td>
    </tr>
    <tr>
      <td><code>slide-in-left-$my-css-var</code></td>
      <td rowspan="2"><code>--vin-enter-translate-x: var(--my-css-var);</code></td>
    </tr>
    <tr>
      <td><code>slide-in-right-$my-css-var</code></td>
    </tr>
  </tbody>
</table>

## Slide Out

Define exit animation's starting `translate`.

- The default **value** is `100%` if not specified.

```html
<button class="animate-out slide-out-top">Button</button>
<button class="animate-out slide-out-from-top">Button</button>
<button class="animate-out slide-out-top-4">Button</button>
<button class="animate-out slide-out-top-50%">Button</button>
<button class="animate-out slide-out-top-2/3">Button</button>
<button class="animate-out slide-out-top-full">Button</button>
<button class="animate-out slide-out-top-$my-css-var">Button</button>
```

<table>
  <thead>
    <tr>
      <th>Classname</th>
      <th>Property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>slide-out-top</code></td>
      <td rowspan="3"><code>--vin-exit-translate-y: -100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-to-top</code></td>
    </tr>
    <tr>
      <td><code>slide-out-top-full</code></td>
    </tr>
    <tr>
      <td><code>slide-out-bottom</code></td>
      <td><code>--vin-exit-translate-y: 100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-left</code></td>
      <td><code>--vin-exit-translate-x: -100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-right</code></td>
      <td><code>--vin-exit-translate-x: 100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-bottom-10</code></td>
      <td><code>--vin-exit-translate-y: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-bottom-48%</code></td>
      <td><code>--vin-exit-translate-y: 48%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-bottom-.8</code></td>
      <td><code>--vin-exit-translate-y: 0.2rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-bottom-52.1</code></td>
      <td><code>--vin-exit-translate-y: 13.025rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-bottom-66.6%</code></td>
      <td><code>--vin-exit-translate-y: 66.6%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-bottom-100</code></td>
      <td><code>--vin-exit-translate-y: 25rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-bottom--20</code> ⚠️</td>
      <td><code>--vin-exit-translate-y: -5rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-bottom--48%</code> ⚠️</td>
      <td><code>--vin-exit-translate-y: -48%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-bottom--66.66</code> ⚠️</td>
      <td><code>--vin-exit-translate-y: -16.665rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-top--20</code> ⚠️</td>
      <td><code>--vin-exit-translate-y: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-top--48%</code> ⚠️</td>
      <td><code>--vin-exit-translate-y: 48%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-top--66.66</code> ⚠️</td>
      <td><code>--vin-exit-translate-y: 16.665rem;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-bottom-1/3</code></td>
      <td><code>--vin-exit-translate-y: 33.3333333333%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-bottom--2/3</code> ⚠️</td>
      <td><code>--vin-exit-translate-y: -66.6666666667%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-top--2/3</code> ⚠️</td>
      <td><code>--vin-exit-translate-y: 66.6666666667%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-bottom-full</code></td>
      <td><code>--vin-exit-translate-y: 100%;</code></td>
    </tr>
    <tr>
      <td><code>slide-out-top-$my-css-var</code></td>
      <td rowspan="2"><code>--vin-exit-translate-y: var(--my-css-var);</code></td>
    </tr>
    <tr>
      <td><code>slide-out-bottom-$my-css-var</code></td>
    </tr>
    <tr>
      <td><code>slide-out-left-$my-css-var</code></td>
      <td rowspan="2"><code>--vin-exit-translate-x: var(--my-css-var);</code></td>
    </tr>
    <tr>
      <td><code>slide-out-right-$my-css-var</code></td>
    </tr>
  </tbody>
</table>
