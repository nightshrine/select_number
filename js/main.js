function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const optionForm = document.querySelector("#option-form");
optionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let minNum = parseInt(document.querySelector("#min_num").value);
    let maxNum = parseInt(document.querySelector("#max_num").value);
    let numPeople = parseInt(document.querySelector("#num_people").value);
    let numSelect = parseInt(document.querySelector("#num_select").value);
    if (minNum > maxNum) {
        return alert("数字の範囲が不正です。");
    }
    if (numPeople * numSelect > maxNum - minNum + 1) {
        return alert("割り当てる数字が多すぎます。");
    }
    let numList = [];
    for (let i = minNum; i <= maxNum; i++) {
        numList.push(i);
    }
    let shuffleList = shuffleArray([...numList]);
    result = document.querySelector(".result");
    result.innerHTML = "";
    for (let i=0; i<numPeople; i++) {
        let numberList = document.createElement("div");
        numberList.classList.add("number-list");
        for (let j=0; j<numSelect; j++) {
            let number = shuffleList.pop();
            numberList.innerHTML += `${number}  `;
        }
        result.appendChild(numberList);
    }

    let numberLists = document.querySelectorAll(".number-list");
    for (let i=0; i<numberLists.length; i++) {
        numberLists[i].addEventListener("click", (e) => {
            if (numberLists[i].classList.contains("selected")) {
                numberLists[i].classList.remove("selected");
            } else {
                numberLists[i].classList.add("selected")
            }
        });
    }
});
