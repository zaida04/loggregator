<script>
    import { token } from "$lib/store";
    import Button from "../ui/button/button.svelte";
</script>

<p class="text-sm">
    If we lack support for your language or runtime, you can still use
    Loggregator. This option is particularly useful for
    non-JavaScript/TypeScript users or those with unique use cases. Here's an
    example of a valid HTTP request to send a log over to Loggregator:
</p>

<pre>
    <code>
{`curl -X POST "https://loggregator.co/api/logger" \\
    -H "Content-Type: application/json" \\
    -H "Authorization: Bearer ${$token}" \\
    -d '{"content": "This is a valid log line"}'`}
    </code>
</pre>

<Button
    size="xs"
    on:click={() =>
        navigator.clipboard
            .writeText(`curl -X POST "https://loggregator.co/api/logger" \\
    -H "Content-Type: application/json" \\
    -H "Authorization: Bearer ${$token}" \\
    -d '{"content": "This is a valid log line"}'`)}
    >Copy
</Button>
