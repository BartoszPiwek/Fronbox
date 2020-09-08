# Burger

Create default burger element without javascript initiation. Prepared element for [Toggler](./behaviors/toggler.md) behavior.

## Behavior classes

-   `isActive` - toggle

## Mixin

```pug
+burger(id, params)
```

-   id: _string_ - attribute value `data-toggler`
-   params?: _Object_ - default [components](/components.md) object

## Example

Additional using [Toggler](./behaviors/toggler.md) for toggle tag class `isActive`.

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
