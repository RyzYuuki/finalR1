//<------firlterKeywords()------> 入力された文字と一致する候補を表示
function filterKeywords() {
    const searchInput = document.getElementById("search-box").value.toLowerCase();
    const prefectureList = document.querySelectorAll("#prefecture-List option");

    prefectureList.forEach((prefecture) => {
        const prefectureText = prefecture.textContent.toLowerCase();
        if (prefectureText.includes(searchInput)) {
            prefecture.style.display = "block";
        } else {
            prefecture.style.display = "none";
        }
    });
}

//<------pageTransition()------> 入力された県と合致するページへ遷移
function pageTransition() {
    changeColor();
    const searchInput = document.getElementById("search-box").value.toLowerCase();
    const prefectureList = document.querySelectorAll("#prefecture-List option");

    for (let i = 0; i < prefectureList.length; ++i) {
        if (prefectureList[i].textContent.toLocaleLowerCase() === searchInput) {
            location.href = prefectureList[i].value;
        }
    }
}

//<------chaneColor()------> クリック時色変更
function changeColor() {
    const inputSubmit = document.getElementById("search-submit");
    inputSubmit.style.backgroundColor = "#797de8";

    setTimeout(() => {
        inputSubmit.style.backgroundColor = ""; 
    }, 500); 
}

//<------enter()------> エンター入力でページ遷移
function enter(event) {
    if (event.key === "Enter") {
        pageTransition();
    }
}
