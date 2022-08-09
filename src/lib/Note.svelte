<script>
  import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    CardHeader,
    CardText,
  } from "sveltestrap";
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  const dispatcher = createEventDispatcher();

  export let title, color, description, id, date;
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
        {color}
      </CardHeader>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>
          {@html description}
        </CardText>
      </CardBody>
      <CardFooter class="text-end">
        {date}
      </CardFooter>
    </Card>
  </div>
</main>
