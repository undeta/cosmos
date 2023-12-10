<template>
  <main class="flex flex-col gap-4">
    <div>
      <c-button> Default Button </c-button>
      <c-button type="primary"> Primary Button </c-button>
      <c-button type="ghost"> Ghost Button </c-button>
      <c-button type="text"> Text Button </c-button>
    </div>

    <div>
      <c-button danger> Danger Default Button </c-button>
      <c-button
        danger
        type="primary"
      >
        Danger Primary Button
      </c-button>
      <c-button
        danger
        type="ghost"
      >
        Danger Ghost Button
      </c-button>
      <c-button
        danger
        type="text"
      >
        Danger Text Button
      </c-button>
    </div>

    <div>
      <c-button> Default Button </c-button>
      <c-button size="small"> Small Button </c-button>
      <c-button size="large"> Large Button </c-button>
    </div>

    <div>
      <c-button> Default Button </c-button>
      <c-button square> S </c-button>
      <c-button rounded> Rounded Button </c-button>
      <c-button
        rounded
        square
      >
        C
      </c-button>
    </div>

    <div></div>
  </main>
</template>
