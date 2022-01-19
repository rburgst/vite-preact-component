Sample repo showing a problem when trying to create a preact library component with vite.

To reproduce do the following:
1. cd vite-lib
2. yarn install
3. yarn build
4. cd ../vite-app
5. yarn install
6. yarn dev
7. open the browser at http://localhost:3000

## Expected: 

you should see the standard page with a counter components

## Actual: 

You get an empty screen with the error message in the javascript console: 

```
Uncaught SyntaxError: The requested module '/node_modules/.vite/preact.js?v=ee72ecf1' does not provide an export named 'default'
```