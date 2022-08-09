<script>
  import { CardDeck } from "sveltestrap/";

  import Header from "./lib/Header.svelte";
  import Note from "./lib/Note.svelte";
  import AddNoteCard from "./lib/AddNoteCard.svelte";

  import { notes } from "./stores";
</script>

<main>
  <Header />
  <CardDeck class="d-inline-flex flex-wrap" style="">
    <AddNoteCard />
    {#each $notes as note}
      <Note
        title={note.title}
        id={note.id}
        description={note.description}
        color={note.color}
        date={note.date}
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
