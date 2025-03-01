---
title: Injeção de dependência no Vue
description: ""
publishedAt: 2025-03-01
author: Italo Canturil
---

# Injeção de dependência no Vue

A comunicação de dados entre componentes é essencial ao escalar uma aplicação Vue. Normalmente utilizamos *props* para passar informações do elemento pai para o filho, porém em árvores de componentes muito profundas se torna complicado. Imagine um trem no qual o primeiro vagão precisa enviar uma mensagem para uma vagão três posições à frente. Em vez de passar informação de vagão, uma comunicação direta seria mais eficiente. No Vue isso é possível com `provide` e `inject`, permitindo que um componente disponibilize dados para seus descendentes sem precisar repassá-los manualmente.

```js
  // Elemento Pai
  <script setup>
    import { provide } from 'vue'

    provide('message', 'Salve');

    const foo = ref('bar');

    provide('fooBar', foo);
  </script>
```

```js
  // filho 3
  <script setup>
    import { inject } from 'vue'

    const message = inject('message'); // Salve

    const fooBar = inject('fooBar'); // bar
  </script>
```

Também tem a possibilidade de o elemento filho alterar o valor do provide, para alterar tem que atribuir o novo valor igualmente a um `ref`. Porém é recomendável manter as alterações de estado dentro do elemento provider.

```js
<script setup>
  import { inject } from 'vue'

  const fooBar = inject('fooBar'); // bar
</script>

<template>
  <div>
    <button @click="fooBar = 'foo'">{{ fooBar }}</button> // foo
  </div>
</template>
```

## Adicionando reatividade

```js
// dentro do elemento provider

<script setup>
  import { provider, ref } from 'vue'

  const sentimento = ref('raiva');

  function alteraSentimento () {
    sentimento.value = 'feliz'
  }

  provide('sentimento', 
    sentimento,
    alteraSentimento
  )
</script>
```

```js
// dentro do component de injeção

<script setup>
  import { injection } from 'vue'

  const { sentimento, alteraSentimento } = inject('sentimento');
</script>

<template>
  <button @click="alteraSentimento">{{ sentimento }}</button>
</template>
```

`Provide` e `Inject` é uma ferramenta poderosa para gerenciar dados em componentes profundamente aninhados, resolvendo o *props drilling*. Embora seja uma solução prática, é importante saber dosar e em alguns casos mais complexos preferir outras abordagens como *Pinia* e *composables*.