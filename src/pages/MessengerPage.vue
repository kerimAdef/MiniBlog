<!--
Forked from:
https://quasar.dev/vue-components/chat#example--name
-->
<div id="q-app" style="min-height: 100vh;">
    <div class="q-pa-md row justify-center">
        <div style="width: 100%; max-width: 400px">
          <q-chat-message
            name="me"
            :text="['hey, how are you?']"
            sent
          ></q-chat-message>
          <q-chat-message
            name="Jane"
            :text="['doing fine, how r you?']"
          ></q-chat-message>
        </div>
      </div>
    </div>