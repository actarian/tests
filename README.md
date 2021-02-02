# Framework Tests

Various frontend framework performance tests.  
Frameworks involved: 
[Angular](https://angular.io/), 
[Blazor](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor), 
[Preact](https://preactjs.com/), 
[React](https://it.reactjs.org/), 
[Recks](https://recks.gitbook.io/recks/), 
[RxComp](https://github.com/actarian/rxcomp), 
[Svelte](https://svelte.dev/), 
[Vue](https://vuejs.org/). 
___


## Performances
In order to compare performances between frameworks the same app has been developed.  
Using a repeater a component has been instantiated 2000 times and attached with an event listener for state updating.  
___


## Tests

 framework   | demo                                                                                         | report   
:------------|:---------------------------------------------------------------------------------------------|:------------------------------------------------------------|
Angular 11   | [demo](https://actarian.github.io/tests/angular-test/)                                       | [report](https://actarian.github.io/tests/reports/angular-test.html) 
Blazor       | For testing blazor you should run [dotnet](https://github.com/actarian/tests/blazor-test/)   | [report](https://actarian.github.io/tests/reports/blazor-test.html)  
Preact       | [demo](https://actarian.github.io/tests/preact-test/)                                        | [report](https://actarian.github.io/tests/reports/preact-test.html) 
React        | [demo](https://actarian.github.io/tests/react-test/)                                         | [report](https://actarian.github.io/tests/reports/react-test.html)
Recks        | [demo](https://actarian.github.io/tests/recks-test/)                                         | [report](https://actarian.github.io/tests/reports/recks-test.html) 
RxComp       | [demo](https://actarian.github.io/tests/rxcomp-test/)                                        | [report](https://actarian.github.io/tests/reports/rxcomp-test.html) 
Svelte       | [demo](https://actarian.github.io/tests/svelte-test/)                                        | [report](https://actarian.github.io/tests/reports/svelte-test.html) 
Vue          | [demo](https://actarian.github.io/tests/vue-test/)                                           | [report](https://actarian.github.io/tests/reports/vue-test.html) 
___

## Optional parameter
Every application support an optional query parameter count to change the initial repeater count value.

[https://actarian.github.io/tests/react-test/?count=5000](https://actarian.github.io/tests/react-test/?count=5000)

___
<!--
 framework   | demo
:------------|:----------------------------------------------------------------------------------------------|
Angular      | [Angular 11](https://actarian.github.io/tests/angular-test/) 
Blazor       | For testing blazor you should run [dotnet](https://github.com/actarian/tests/blazor-test/) 
Preact       | [Preact](https://actarian.github.io/tests/preact-test/) 
React        | [React](https://actarian.github.io/tests/react-test/) 
Recks        | [Recks](https://actarian.github.io/tests/recks-test/) 
RxComp       | [RxComp](https://actarian.github.io/tests/rxcomp-test/) 
Svelte       | [Svelte](https://actarian.github.io/tests/svelte-test/) 
Vue          | [Vue](https://actarian.github.io/tests/vue-test/) 
___
-->

<!--
## Reports

 framework   | report
:------------|:----------------------------------------------------------------------------------------------|
Angular      | [Angular 11](https://actarian.github.io/tests/reports/angular-test.html) 
Blazor       | [Blazor](https://actarian.github.io/tests/reports/blazor-test.html) 
Preact       | [Preact](https://actarian.github.io/tests/reports/preact-test.html) 
React        | [React](https://actarian.github.io/tests/reports/react-test.html) 
Recks        | [Recks](https://actarian.github.io/tests/reports/recks-test.html) 
RxComp       | [RxComp](https://actarian.github.io/tests/reports/rxcomp-test.html) 
Svelte       | [Svelte](https://actarian.github.io/tests/reports/svelte-test.html) 
Vue          | [Vue](https://actarian.github.io/tests/reports/vue-test.html) 
___
-->

## Running tests  
  
First install dependencies:

```sh
npm install
```

start server

```sh
npm run serve
```

launch single performance test

```sh
npm run angular-test
```

```sh
npm run preact-test
```

```sh
npm run react-test
```

```sh
npm run recks-test
```

```sh
npm run rxcomp-test
```

```sh
npm run svelte-test
```

```sh
npm run vue-test
```

