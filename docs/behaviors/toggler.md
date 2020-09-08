# Toggler

Toggle tag class(es) name.

```js
new Toggler({
  /** Get elements with attribute `data-toggler` === `id` value */
  id: string;
  /** Toggle class name, default `isActive` */
  classNameActive?: string;
  /** Callback function when component change state */
  onChange?: (value: boolean) => void;
})
```

## Example

Using [Burger](./components/burger.md) for toggle tag class `isActive`.

### Code

```pug
+burger('header')
```

```js
import { Toggler } from './bootstrap/toggler'

new Toggler({
	id: 'header',
})
```

### View

<!-- TODO -->
