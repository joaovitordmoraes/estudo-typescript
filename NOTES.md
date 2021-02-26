# Anotações sobre TypeScript

## Instalação


## Compilar
- Para compilar um único arquivo nós usamos o comando: 
```bash
tsc [arquivo.ts]
```

- Para compilar um único arquivo e ficar esperando por novas mudanças podemos usar o comando:
```bash
tsc [arquivo.ts] --watch
```

### Criando e configurando o TSconfig

Se quisermos compilar vários arquivos ao mesmo tempo ou também definir algumas regras, como por exemplo a pasta em que seram salvos os arquivos compilados, precisaremos gerar o arquivo `tsconfig.json`.

Para gera-lo usamos o comando:
```bash
tsc --init
```