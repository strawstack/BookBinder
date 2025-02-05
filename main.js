import { bind } from "./bind.js";

export function main() {

    const input = document.querySelector("#file");
    const output = document.querySelector(".output") 

    input.addEventListener("change", e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = readerEvent => {
            output.innerHTML = bind(readerEvent.target.result);
        };
    });
}