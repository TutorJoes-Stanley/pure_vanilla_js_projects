const suggestBox = document.querySelector(".suggest-box");
const inputBox = document.querySelector("#searchText");

inputBox.addEventListener("keyup", filterSuggesstions);
inputBox.addEventListener("click", () => {
  inputBox.select();
});

async function filterSuggesstions() {
  const response = await fetch("./data/data.json");
  const KeywordsList = await response.json();
  let suggest = [];
  let input = this.value.trim().toLowerCase();
  if (input.length) {
    suggest = KeywordsList.filter((keyword) => {
      return keyword.search.toLowerCase().includes(input);
    });
  }
  display(suggest);
  if (!suggest.length) {
    suggestBox.innerHTML = "";
  }
}
function display(suggest) {
  const content = suggest.map((list) => {
    const data = list.search;
    return `<li onclick="selectInput('${data}')">${Highlight(data)}<li>`;
  });
  suggestBox.innerHTML = `<ul>${content.join("")}</ul>`;
}

function selectInput(data) {
  inputBox.value = data;
  suggestBox.innerHTML = "";
}

function Highlight(textToSearch) {
  const searchString = inputBox.value.toLowerCase();
  const startIndex = textToSearch.toLowerCase().indexOf(searchString); //2
  const highlightedText = textToSearch.substring(0, startIndex) + "<mark>" + searchString + "</mark>" + textToSearch.substring(startIndex + searchString.length);
  return highlightedText;
}
/*
this is 

th<mark>i</mark>s is 

*/
