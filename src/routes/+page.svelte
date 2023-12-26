<script>
  import CTA from "$lib/components/reusable/CTA.svelte";
  import Hero from "$lib/components/reusable/Hero.svelte";
  import Navbar from "$lib/components/reusable/Navbar/Navbar.svelte";
  import TwoColumn from "$lib/components/reusable/TwoColumn/TwoColumn.svelte";
  import TwoColumnItem from "$lib/components/reusable/TwoColumn/TwoColumnItem.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import Footer from "$lib/components/reusable/Footer.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import { Upload } from "lucide-svelte";
  import { MagnifyingGlass } from "radix-icons-svelte";
</script>

<svelte:head>
  <title>Loggregator | Logging made easy.</title>
  <meta
    name="description"
    content="Loggregator is a simple, easy-to-use online log aggregation service that allows you to store, view, and search your logs."
  />
  <meta
    name="keywords"
    content="loggregator, logging, logs, log, aggregation, online, service, store, view, search"
  />
  <meta property="og:title" content="Loggregator | Logging made easy." />
  <meta
    property="og:description"
    content="Loggregator is a simple, easy-to-use online log aggregation service that allows you to store, view, and search your logs."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://loggregator.co/" />
</svelte:head>

<Navbar />
<Hero>
  <div class="flex flex-col gap-6 items-center text-center mx-4">
    <h1 class="text-4xl md:text-6xl">
      Store, view, & search <br />your logs
    </h1>
    <h3>That's it. Nothing complicated, only what you need.</h3>
    <div class="flex flex-row gap-4">
      <a href="/app"><Button>Get Started</Button></a>
      <Button>Documentation</Button>
    </div>
  </div>
</Hero>
<Separator />
<TwoColumn>
  <TwoColumnItem
    icon={Upload}
    title="Send your logs from your app"
    description="Use good ol' HTTP requests or a plugin available for your favorite logger."
  />
  <TwoColumnItem
    icon={MagnifyingGlass}
    title="We handle the annoying part"
    description="We ingest every log you send our way and make it easy to search through your logs and view them in a digestible way"
  />
</TwoColumn>
<CTA />
<Separator />
<Footer />
