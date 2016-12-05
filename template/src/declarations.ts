// allow to import vue files in ts files
declare module '*.vue' {
  import * as Vue from 'vue'
  const Component: typeof Vue
  export default Component
}