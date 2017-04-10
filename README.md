# Angular Material Components


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

Include the `angular-material-components` module as a dependency in your application.

```javascript
angular.module('myApp', ['ngMaterial', 'angular-material-components']);
```

## <a name="usage"></a> Usage

**Example Template**

```html
 <form name="myForm">

    <text-input icon="text_fields" label="Text Input Sample" ng-model="input" is-required="true" max-length="50">
        <error-message error="required">This field is required.</error-message>
    </text-input>
    
    <text-input icon="email" type="email" label="Email Input Sample" ng-model="email" is-required="true" max-length="50">
        <error-message error="required">This field is required.</error-message>
        <error-message error="email">This field must be a valid email address.</error-message>
    </text-input>
    
    <text-input icon="security" type="password"  label="Password Input Sample" ng-model="password" is-required="true" max-length="50">
        <error-message error="required">This field is required.</error-message>
    </text-input>
    
    <text-input icon="security" type="password"  label="Password Match Input Sample" ng-model="password2" is-required="true" max-length="50" match="password" check-match="true">
        <error-message error="required">This field is required.</error-message>
        <error-message error="match">The fields not match.</error-message>
    </text-input>
    
    <number-input icon="attach_money" label="Number Input Sample" ng-model="number" is-required="true" max-length="50">
        <error-message error="required">This field is required.</error-message>
    </number-input>
    
    <text-area-input name="textArea" icon="text_fields" label="Text Area Input Sample" ng-model="textArea" is-required="true" max-length="50">
        <error-message error="required">This field is required.</error-message>
    </text-area-input>
        
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