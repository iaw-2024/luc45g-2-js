
// const ref 
// const path = p.join(window.location.href,'data');


const parent_classes = ["bg-gray-100", "flex-grow", "text-black", "border-l-8", "border-green-500", "rounded-md", "px-3", "py-2", "w-full", "md:w-5/12", "lg:w-3/12"];
const note_classes = ["text-gray-500", "font-thin", "text-sm", "pt-1"];
const btn_parent_classes = ["flex", "flex-row-reverse"];
const btn_classes = ["bg-green-600", "hover:bg-green-800", "text-white", "font-bold", "py-2", "px-4", "rounded", "focus:outline-none", "focus:shadow-outline"];


fetch('/cliente_servidor/data')
    .then((response) => response.json())
    .then((json) => {
        var list = document.getElementById("list_parent");
        json.forEach(e => {
            var comp = buildComponent(e.username, e.note, e.password);
            list.appendChild(comp);
        });
    }
);

function buildComponent(username, note, password) {
    const passData = document.createElement("div");
    passData.classList.add(...parent_classes);
    passData.innerHTML = username;

    const notes = document.createElement("div");
    notes.classList.add(...note_classes);
    const notes_text = document.createElement("span");
    notes_text.innerHTML = note;
    notes.appendChild(notes_text);

    const button_parent = document.createElement("div");
    button_parent.classList.add(...btn_parent_classes);
    
    const button = document.createElement("button");
    button.classList.add(...btn_classes);
    button.innerHTML = "Copiar";
    button.onclick = async () => {
        copyToClipboard(password);
        button.innerHTML = "¡Copiado!";
        await sleep(1500);
        button.innerHTML = "Copiar";
    }
    button_parent.appendChild(button);
    

    passData.appendChild(notes);
    passData.appendChild(button_parent);
    return passData;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}