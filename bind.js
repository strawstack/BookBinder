export function bind(source) {
    const line = source.split("\n")
        .map(line => line.trim())
        .filter(line => !line.startsWith("//"))
        .join("");
    return `javascript:(() => { ${line} })()`;
}

try {
    process.stdin.on('readable', () => {
        let data;
        while ((data = process.stdin.read()) !== null)
        console.log(bind(data.toString()));
    });
} catch(e) {} // process not defined


// If passed a command line arg, this program assumes
// this is a filepath to a source file and will console log
// the bookmarklet-ifyed string

// If run as a module, the user code can import a function that 
// bookmarklet-ifys the given source

// If the project root is hosted on a static webserver
// a web app will allow users to create a bookmarklet
// by pasting in source or 