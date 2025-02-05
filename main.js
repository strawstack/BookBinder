import { bind } from "./bind.js";

export function main() {

    const source = `
        function main() {
            // This is a comment
            alert("sandwitch");
        }
        // This is another comment
        main();
    `;

    console.log(
        bind(source)
    );
}