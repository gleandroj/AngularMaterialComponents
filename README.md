# Angular Material Simple Components

## Demo
Demo Hosted on github.io
[Click Here](https://gleandroj.github.io/angular-material-simple-components/demo/){:target="_blank"}

Quick Links:
* [Installation](#installaton)
* [Usage](#usage)
* [Documentation](#documentation)

## <a name="installation"></a> Installation

#### Npm

Change to your project's root directory.

```bash
# To install latest
npm install angular-material-simple-components

# To install latest and update package.json
npm install angular-material-simple-components --save
```

#### setup

install modules

```bash
# install npm modules
npm install
```

Include the `angular-material-simple-components` module as a dependency in your application.

```javascript
angular.module('myApp', ['ngMaterial', 'angular-material-simple-components']);
```

## <a name="usage"></a> Usage

**Example Template**

```html
 <form name="myForm">
    <text-input icon="text_fields" label="Text Input Sample" ng-model="input" is-required="true" max-length="50">
        <error-message error="required">This field is required.</error-message>
    </text-input>
    
    <number-input icon="attach_money" label="Number Input Sample" ng-model="number" is-required="true" max-length="50">
        <error-message error="required">This field is required.</error-message>
    </number-input>
    
    <image-input name="image" ng-model="image" is-required="true">
        <error-message error="required">This field is required.</error-message>
        <error-message error="image">This field must be a valid image.</error-message>
    </image-input>
    
    <search-input label="Search Input Sample" name="search" ng-model="search" ></search-input>
    
    <html-text-area-input name="htmlTextArea" icon="text_fields" label="Html Input Sample" ng-model="htmlTextArea" is-required="true" max-length="50">
        <error-message error="required">This field is required.</error-message>
    </html-text-area-input>
</form>
```

## <a name="documentation"></a> Documentation

### Directives

#### <a name="errorMessage"></a> errorMessage

`errorMessage` is a simplification of ngMessage, it is used inside of the components

```
<error-message [error=""] [message=""]>
... [message]
</error-message>
```

#### Attributes

| Param | Type | Details |
| :--: | :--: | :--: |
| error | string= | The key of error. (key of $error object on an ngModel instance) |
| message | string= | The message to show when the error happens (You can put error inside the component or on the attribute [message]) |

### Components

#### <a name="textInput"></a> textInput

`textInput` is a component to input text

```
<text-input [name=""] [label=""] [icon=""] [type=""] [ng-model=""] [is-disabled=""] [is-required=""] [no-float=""] [max-length=""] [min-length=""] >
... 
</text-input>
```

#### Attributes

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string= | Property name of the form under which the control is published. |
| label | string= | The label of the input. |
| icon | string= | Icon class name based on Material Icons. When present, will put a icon on left of component. |
| type | string= | The type of component (text, password or email, url). |
| ng-model | string= | The ngModel directive. |
| is-disabled | boolean= | If the expression is truthy, then the disabled attribute will be set on the element. |
| is-required | boolean= | Sets required attribute if set to true. |
| no-float | boolean= | When present, placeholder attributes on the input will not be converted to floating labels. |
| max-length | number= | Sets maxlength validation error key if the value is longer than maxlength. |
| min-length | number= | Sets minlength validation error key if the value is shorter than minlength. |

#### <a name="numberInput"></a> numberInput

`numberInput` is a component to input numbers

```
<number-input [name=""] [label=""] [icon=""] [ng-model=""] [is-disabled=""] [is-required=""] [no-float=""] [max=""] [min=""] [step=""] >
... 
</number-input>
```

#### Attributes

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string= | Property name of the form under which the control is published. |
| label | string= | The label of the input. |
| icon | string= | Icon class name based on Material Icons. When present, will put a icon on left of component. |
| ng-model | string= | The ngModel directive. |
| is-disabled | boolean= | If the expression is truthy, then the disabled attribute will be set on the element. |
| is-required | boolean= | Sets required attribute if set to true. |
| no-float | boolean= | When present, placeholder attributes on the input will not be converted to floating labels. |
| max | number= | Sets max number value allowed. |
| min | number= | Sets min number value allowed. |
| step | number= | Sets step increment value. |

#### <a name="searchInput"></a> searchInput

`searchInput` is a component to input text

```
<search-input [name=""] [label=""] [ng-model=""] [is-disabled=""] [is-required=""] [no-float=""] [max-length=""] [min-length=""] >
... 
</search-input>
```

#### Attributes

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string= | Property name of the form under which the control is published. |
| label | string= | The label of the input. |
| ng-model | string= | The ngModel directive. |
| is-disabled | boolean= | If the expression is truthy, then the disabled attribute will be set on the element. |
| is-required | boolean= | Sets required attribute if set to true. |
| max-length | number= | Sets maxlength validation error key if the value is longer than maxlength. |
| min-length | number= | Sets minlength validation error key if the value is shorter than minlength. |

#### <a name="textAreaInput"></a> textAreaInput

`textAreaInput` is a component to input long texts

```
<text-area-input [name=""] [label=""] [icon=""] [ng-model=""] [is-disabled=""] [is-required=""] [no-float=""] [max-length=""] [min-length=""] >
... 
</text-area-input>
```

#### Attributes

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string= | Property name of the form under which the control is published. |
| label | string= | The label of the input. |
| icon | string= | Icon class name based on Material Icons. When present, will put a icon on left of component. |
| ng-model | string= | The ngModel directive. |
| is-disabled | boolean= | If the expression is truthy, then the disabled attribute will be set on the element. |
| is-required | boolean= | Sets required attribute if set to true. |
| no-float | boolean= | When present, placeholder attributes on the input will not be converted to floating labels. |
| max-length | number= | Sets maxlength validation error key if the value is longer than maxlength. |
| min-length | number= | Sets minlength validation error key if the value is shorter than minlength. |

#### <a name="htmlTextAreaInput"></a> htmlTextAreaInput


`htmlTextAreaInput` is a component to input, edit and preview long html texts

```
<html-text-area-input [name=""] [label=""] [icon=""] [ng-model=""] [is-disabled=""] [is-required=""] [max-length=""] [min-length=""] >
... 
</html-text-area-input>
```

#### Attributes

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string= | Property name of the form under which the control is published. |
| label | string= | The label of the input. |
| icon | string= | Icon class name based on Material Icons. When present, will put a icon on left of component. |
| ng-model | string= | The ngModel directive. |
| is-disabled | boolean= | If the expression is truthy, then the disabled attribute will be set on the element. |
| is-required | boolean= | Sets required attribute if set to true. |
| max-length | number= | Sets maxlength validation error key if the value is longer than maxlength. |
| min-length | number= | Sets minlength validation error key if the value is shorter than minlength. |

#### <a name="imageInput"></a> imageInput

`imageInput` is a component to input Image

```
<image-input [name=""] [ng-model=""] [is-disabled=""] [is-required=""] [preview=""]  [show-buttons=""] [allow-webcam=""] [override-class=""] [fallback-img=""] >
... 
</image-input>
```

#### Attributes

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string= | Property name of the form under which the control is published. |
| ng-model | string= | The ngModel directive. |
| is-disabled | boolean= | If the expression is truthy, then the disabled attribute will be set on the element. |
| is-required | boolean= | Sets required attribute if set to true. |
| preview | boolean= | Allow preview the input image. |
| show-buttons | boolean= | Allow show the control buttons of the input (Select and Remove Image). |
| allow-webcam | boolean= | Allow take picture from user webcam. |
| override-class | string= | Css class to put on preview image div. |
| fallback-img | string= | Url of fallback image to present when user don't have a valid image or not selected one. |

#### <a name="timeInput"></a> timeInput

`timeInput` is a component to input time

```
<time-input [name=""] [label=""] [icon=""] [ng-model=""] [is-disabled=""] [is-required=""] [no-float=""] >
... 
</time-input>
```

#### Attributes

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string= | Property name of the form under which the control is published. |
| label | string= | The label of the input. |
| icon | string= | Icon class name based on Material Icons. When present, will put a icon on left of component. |
| ng-model | string= | The ngModel directive. |
| is-disabled | boolean= | If the expression is truthy, then the disabled attribute will be set on the element. |
| is-required | boolean= | Sets required attribute if set to true. |
| no-float | boolean= | When present, placeholder attributes on the input will not be converted to floating labels. |

#### <a name="dateInput"></a> dateInput

`dateInput` is a component to input date

```
<date-input [name=""] [label=""] [icon=""] [ng-model=""] [is-disabled=""] [is-required=""] [max-date=""] [min-date=""] [filter-date=""] >
... 
</date-input>
```

#### Attributes

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string= | Property name of the form under which the control is published. |
| label | string= | The label of the input. |
| ng-model | string= | The ngModel directive. |
| is-disabled | boolean= | If the expression is truthy, then the disabled attribute will be set on the element. |
| is-required | boolean= | Sets required attribute if set to true. |
| max-date | date= | The max date allowed in input. |
| min-date | date= | The min date allowed in input. |
| filter-date | function= | The function to used to filter the allowed dates in the input, ```function(testDate : date) : boolean```. |

#### <a name="mdPagination"></a> mdPagination

`mdPagination` is a component to pagination

```
<md-pagination [items-per-page=""] [current-page=""] [n-items=""] [is-disabled=""]>
... 
</md-pagination>
```

#### Attributes

| Param | Type | Details |
| :--: | :--: | :--: |
| items-per-page | number= | Quantity of items to show per page. |
| n-items | number= | Total of items to paginate. |
| current-page | number= | The current page to show, this bind two way. |
| is-disabled | boolean= | If the expression is truthy, then the disabled attribute will be set on the element. |

### Services

#### <a name="CameraService"></a> CameraService

`CameraService` is a service to use user webcam

#### Methods

### showCamera

Show the dialog to take a picture

**Parameters**

| Param | Type | Details |
| :--: | :--: | :--: |
| options.title | string= | <p>dialog title</p>  |
| options.height | string= | <p>dialog height</p>  |
| options.width | string= | <p>dialog width</p>  |

**Returns**

| Param | Details |
| :--: | :--: |
| promise | <p>a promise that will return the photo (base 64)</p>  |