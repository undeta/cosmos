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

    <div>
      <c-sheet>
        <h5>Pushing Changes</h5>

        <p>After you have created a project, you can push your local code to a live Space environment with a single command:</p>

        <c-code>space push</c-code>

        <p>This will package and upload all the necessary files to create a new “revision”: a complete package of your app at a single point in time.</p>

        <p>Each push also creates a "Builder instance”: a full copy of your app, running in your Space, to test, debug and play around with.</p>
      </c-sheet>

      <c-sheet
        href="#"
        class="min-w-xs"
      >
        <h5>@undeta/cosmos</h5>

        <p>unreleased</p>

        <p>~ no revisions yet</p>
      </c-sheet>
    </div>
  </main>
</template>
