# test_knowledge_map_api
test_knowledge_map_api

❗Задеплоить всё на [Railway](https://railway.app/)❗


## Принимаемые решения


### Решение dflkgj
Поле "тип ссылки" не создавать.
Это кстати может быть полезно по тому что ссылка может быть не URL а библиографическая, то есть тупо текст, хорошо если в каком то формате
Но тут это просто ссылка на тип ресурса... то есть его можно вычленять итак просто из ссылки
по этому это может быть лишнее поле (кстати, нужно где то сделать указатель что из таких то инструментов вроде pubget
было принято такое то решение обрабатывать что то, такое то архитектурное решение, что бы люди не пытались снова его реализовать)

## Как посмотреть содержимое БД внутри PostgreSQL контейнера и как редактировать при необходимости

## Reproduction of architecture (how the architecture was created)

1. Package.json and dependences

2.

`.npmrc`

```ini
store-dir=~/.pnpm-store
virtual-store-dir=~/node_modules
node-linker=isolated
```

3. Deploy and launch PostgrSQL DB (Docker)
https://habr.com/ru/articles/578744/


4. Make and fill Prisma schema file...

`prisma/schema.prisma`


5.

`src/index.ts`

6.

`src/@types/graphql.d.ts`
`src/gql/library.graphql`

7.
`pnpm install`

8.

(https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production)

```shell
npm install will install both "dependencies" and "devDependencies"
npm install --production will only install "dependencies"
npm install --dev will only install "devDependencies"
```


`pnpm start` (`pnpm dev`)
- `pnpm prisma generate`
- `pnpm vite-node .\src\index.ts`

`pnpm prod`