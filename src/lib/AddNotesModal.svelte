<script>
  import moment from "moment";
  import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Label,
    Input,
    Button,
  } from "sveltestrap";

  import {
    noteTitle,
    noteDescription,
    noteColor,
    noteIndex,
    notes,
    noteDate,
  } from "../stores";
  let tNoteTitle, tNoteDescription, tNoteColor;

  const colorOptions = [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Dark",
  ];

  export let isOpen, toggle;
</script>

<main>
  <Modal {isOpen} {toggle} centered scrollable>
    <ModalHeader {toggle}>Add a Note</ModalHeader>
    <ModalBody>
      <Form>
        <div class="mb-3">
          <Label for="noteTitle">Title:</Label>
          <Input
            id="noteTitle"
            bind:value={tNoteTitle}
            name="noteTitle"
            type="text"
            placeholder="Enter the note title here.."
            required
          />
        </div>
        <div class="mb-3">
          <Label for="noteDescription">Description:</Label>
          <Input
            bind:value={tNoteDescription}
            id="noteDescription"
            name="noteDescription"
            type="textarea"
            required
          />
        </div>
        <div class="mb-3">
          <Label for="colorOption">Color:</Label>
          <select
            class="form-select"
            name="colorOption"
            id="colorOption"
            bind:value={tNoteColor}
          >
            <option selected class="bg-light">Light</option>
            {#each colorOptions as option}
              <option class="text-bg-{option.toLowerCase()}">{option}</option>
            {/each}
          </select>
        </div>
      </Form>
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        on:click={() => {
          toggle();
          if (tNoteTitle < 2 || tNoteDescription < 5) {
            alert("Note-title and note-description are too short!");
          } else {
            noteTitle.set(tNoteTitle);
            noteColor.set(tNoteColor);
            noteDescription.set(tNoteDescription);
            $noteDate = moment().format("MMMM Do YYYY");
            $noteIndex++;

            $notes.push({
              id: $noteIndex,
              title: $noteTitle,
              description: $noteDescription,
              color: $noteColor,
              date: $noteDate,
            });
            $notes = $notes;
            localStorage.setItem("notes", JSON.stringify($notes));
          }
        }}>Add</Button
      >
      <Button color="danger" on:click={toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
</main>

<style></style>
