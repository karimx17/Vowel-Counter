function getVowels() {
    let inputText = document.querySelector("input").value;
    var m = inputText.match(/[aeiou]/gi);
    alert(`You have ${m === null ? 0 : m.length} Vowels!`);
    window.location.reload()
  }
