<script>
  import {
    Card,
    CardBody,
    CardSubtitle,
    CardHeader,
    CardText,
    Badge,
  } from "sveltestrap";
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import { marked } from "marked";

  const dispatcher = createEventDispatcher();

  export let title, color, description, id, date, tags;
</script>

<main>
  <div transition:fly={{ y: 200, duration: 500 }}>
    <Card
      class="me-4 ms-4 mt-4 mb-2 text-bg-{color.toLowerCase()} jn-card"
      style="width:18rem;"
      on:click={() => {
        dispatcher("delete", {
          text: id,
        });
      }}
    >
      <CardHeader>
        {title}
      </CardHeader>
      <CardBody>
        <CardSubtitle>{date}</CardSubtitle>
        <CardText>
          {@html marked(description)}
          {#if tags.length !== 0}
            {#each tags as tag}
              <span>
                {#if color.toLowerCase() !== "secondary"}
                  <Badge color="secondary">{tag}</Badge>
                {:else}
                  <Badge color="primary">{tag}</Badge>
                {/if}
              </span>
            {/each}
          {/if}
        </CardText>
      </CardBody>
    </Card>
  </div>
</main>
