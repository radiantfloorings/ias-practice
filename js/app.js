async function loadChapters() {

    const response = await fetch("chapters/index.json");
    const chapters = await response.json();

    const chapterList = document.getElementById("chapterList");

    chapterList.innerHTML = "";

    chapters.forEach(function(chapter){

        chapterList.innerHTML += `
            <div class="card">
                <h2>📘 ${chapter.title}</h2>
                <p>${chapter.subject}</p>

                <button onclick="openChapter('${chapter.id}')">
                    Open Chapter
                </button>

            </div>
        `;

    });

}

function openChapter(chapterId){

    localStorage.setItem("chapter", chapterId);

    alert("Chapter selected: " + chapterId);

}

loadChapters();
