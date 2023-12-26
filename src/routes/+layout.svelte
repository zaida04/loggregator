<script lang="ts">
  import "../index.css";
  import { ModeWatcher } from "mode-watcher";
  import { loggedIn } from "$lib/store";
  import type { PageData } from "./$types";
  export let data: PageData;

  loggedIn.set(!!data.userId);
</script>

<ModeWatcher defaultMode={"dark"} />
<slot />
