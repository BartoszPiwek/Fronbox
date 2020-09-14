# Components

List of usage pug mixins called components.

## Parameters

Default components parameters inside object `params`.

-   **className**: _string_ - addon tag class name
-   **id**: _string_ - addon id name
-   **style**: _Object_ - addon style values
-   **attr**: _Object_ - addon attributes values

## Example

For example lets use one of the created component like `burger`.

```pug
include ~@components/Burger/Burger

+burger('header')
```

```html
<button
	class="click-expand burger"
	type="button"
	data-toggler="header"
></button>
```

Then add default parameters.

```pug
include ~@components/Burger/Burger

+burger('header', {
  className: 'foo',
  style: 'background: red',
  attr: {
    data-foo: 'foo'
  }
})
```

```html
<button
	class="click-expand burger foo"
	type="button"
	data-toggler="header"
	style="background: red;"
></button>
```

### Pug Component Template

```pug
mixin componentName(params = {})
  -
    const { createTagClassNames, loadStyle } = require("@utilities/pug");
    const styles = loadStyle('ComponentName');

    const {
      attr,
      className,
      style,
      id,

      data
    } = params;

    const classNames = createTagClassNames('ComponentName', {

    });

  div(
    id = id,
    class = [
      className,
      classNames,
    ]
    style = style
  )&attributes(attr)

		| Component 'ComponentName' working!
```
