<script>
  import { Card, CardBody, CardTitle, CardText, Button } from "sveltestrap";
  import { createEventDispatcher } from "svelte";

  import AddNotesModal from "./AddNotesModal.svelte";

  let isOpen = false;
  const toggle = () => {
    isOpen = !isOpen;
  };
</script>

<main>
  <Card
    style="width: 18rem;"
    class="text-center jn-card border border-primary mt-4 ms-4 me-4"
    on:click={() => {
      toggle();
    }}
  >
    <CardBody>
      <CardTitle class="display-2 text-success"
        ><i class="bi bi-plus" /></CardTitle
      >
      <CardText class="lead fs-2">Add A Note</CardText>

      <AddNotesModal {isOpen} {toggle} />
    </CardBody>
  </Card>
</main>
