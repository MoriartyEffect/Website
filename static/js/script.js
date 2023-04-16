/* ////////////////////
    Copy code to clipboard
//////////////////// */

const copyButtonLabel = "Copy";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");

    button.innerText = copyButtonLabel;
    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block);
    });
  }
});

async function copyCode(block) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);
}

/* ////////////////////
    Dark Mode Toggle
//////////////////// */
const cls = document.body.classList;
const getSessionTheme = sessionStorage.getItem("theme");
if (getSessionTheme === "dark") {
  cls.toggle("dark-mode", true);
} else if (getSessionTheme === "light") {
  cls.toggle("dark-mode", false);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  cls.toggle("dark-mode", true);
}

document.getElementById("dark-mode-on").addEventListener("click", function (e) {
  cls.toggle("dark-mode", true);
  sessionStorage.setItem("theme", "dark");
});
document.getElementById("dark-mode-off").addEventListener("click", function (e) {
  cls.toggle("dark-mode", false);
  sessionStorage.setItem("theme", "light");
});

