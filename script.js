// George Ferres (13252065)

// Breaks down updates into objects as part of an array with elements seperated into different properites to be combined as part of displayUpdates()
const updates = [
    { date: "May 15, 2024", title: "First Post!", content: "Hello world. Welcome to my persoanl dev log." },
    { date: "May 16, 2024", title: "Learning JavaScript", content: "Started diving into JavaScript. Turned my update logs into a Javascript array with variables instead of copy pasting HTML & ending up with an infinite scrolling page." },
    { date: "May 17, 2024", title: "TEST", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { date: "May 18, 2024", title: "TEST", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { date: "May 19, 2024", title: "TEST", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { date: "May 20, 2024", title: "TEST", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { date: "May 21, 2024", title: "TEST", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { date: "May 22, 2024", title: "TEST", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { date: "May 23, 2024", title: "TEST", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { date: "May 24, 2024", title: "TEST", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    // Future updates go above Crl C + Crl V
];

const updatesSection = document.getElementById("latest-updates"); // Grabs the id tag of the "lastest-updates" section for reference from index.html
const seeMoreButton = document.getElementById("see-more"); // Does the same for the "see-more" id'd button from my HTML document

const updatesPerPage = 5; // Controls how many updates are shown initally & with every "See more" click. NOTE - change when there are more
let currentUpdateIndex = 0;

function displayUpdates() {
    const endIndex = currentUpdateIndex + updatesPerPage;

    for (let i = currentUpdateIndex; i < endIndex && i < updates.length; i++) {
        const update = updates[i];

        const article = document.createElement("article");
        article.classList.add("update");

        const title = document.createElement("h4");
        title.textContent = update.title + " (" + update.date + ")";

        const content = document.createElement("p");
        content.textContent = update.content;

        article.appendChild(title);
        article.appendChild(content);
        updatesSection.appendChild(article);
    }

    currentUpdateIndex = endIndex;
    seeMoreButton.disabled = currentUpdateIndex >= updates.length; // Disables "See more" button when currentUpdateIndex (How many updates are left) = 0
}

seeMoreButton.addEventListener("click", displayUpdates);
displayUpdates();
