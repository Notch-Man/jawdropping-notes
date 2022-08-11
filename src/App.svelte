<script>
  import { CardDeck, Button } from "sveltestrap/";

  import Header from "./lib/Header.svelte";
  import Note from "./lib/Note.svelte";
  import AddNoteCard from "./lib/AddNoteCard.svelte";

  import { notes } from "./stores";
</script>

<main>
  <Header />
  <div class="mt-2 ms-2 text-end me-2 mb-0">
    <Button
      color="danger"
      on:click={() => {
        $notes = [];
        $notes = $notes;
      }}>Clear</Button
    >
  </div>
  <CardDeck class="d-inline-flex flex-wrap" style="">
    <AddNoteCard />
    {#each $notes as note}
      <Note
        title={note.title}
        id={note.id}
        description={note.description}
        color={note.color}
        date={note.date}
        tags={note.tags}
        on:delete={(e) => {
          let index = e.detail.text;

          const aIndexOfNote = $notes.findIndex((obj) => {
            return obj.id == index;
          });

          $notes.splice(aIndexOfNote, 1);
          $notes = $notes;
          localStorage.setItem("notes", JSON.stringify($notes));
        }}
      />
    {/each}
  </CardDeck>
</main>

<style>
</style>
