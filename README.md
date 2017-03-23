# [ui-tabs](https://github.com/lifegadget/ui-tabs)

A simple tab interface for Ember apps

## Installation

* `ember install ui-tabs` in your app repository

## Usage

### Inline

    {{ui-tabs 
      tabs='Foo,Bar,Baz' 
      selected=selected 
      defaultValue='foo' 
      onChange=(action (mut selected))
    }}

### Block

    {{#ui-tabs
      selected=selected
      defaultValue='foo'

      as |t|
    }}

      {{t.tab 'Foo'}}
      {{t.tab 'Bar' value='barred'}}
      {{#t.tab value='baz'}}
        BAZ
      {{/t.tab}}

    {{/ui-tabs}}


## Demo

[https://ui-tabs.firebaseapp.com](https://ui-tabs.firebaseapp.com)

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
