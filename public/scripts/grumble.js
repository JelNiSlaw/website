document.getElementById("reload").addEventListener("click", grumble);
grumble();

async function grumble() {
  const grumble = document.getElementById("grumble");
  fetch("https://grumble.jelnislaw.workers.dev/", { cache: "no-store" }).then(
    async response => {
      const json = await response.json();
      grumble.textContent = json.grumble;
    },
    () => {
      grumble.textContent = "Error";
    }
  );
}
