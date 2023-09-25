### installing react

```sh
npm create vite@latest nama-folder --template react
cd nama-folder
npm i
```

## jsx

html a like for sctructuring the web

## component

sebuah custom tag sebagai bagian dari webpage example `<Card />`
return dari sebuah component yaitu adalah jsx, dalam return harus 1 container
jika ingin structuring seperti tanpa container bisa menggunakan fragment `<></>`

## props

data yang dibawa oleh component

```sh
    <Hello name='Mujahid' />
    <Hello name='Ansori' />
    <Hello name='Majid' />
```

name disitu merupakan sebuah props

```sh
const Hello = (props) => {
    return <div>
        <h1>Hello {props.name}</h1>
    </div>
}
```

atau bisa juga kita menggunakan desctructur

```sh
const Hello = ({name}) => {
    return <div>
        <h1>Hello {name}</h1>
    </div>
}
```

## children

```sh
    <Hello>Mujahid Ansori Majid</Hello>
```

_the component_

```sh
const Hello = ({name}) => {
    return <div>
        <h1>Hello {name}</h1>
    </div>
}
```
