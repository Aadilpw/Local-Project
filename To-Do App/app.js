
const addBtn = document.querySelector(".AddText");
const input = document.querySelector(".userText");
const form = document.querySelector("#taskForm");
const taskDone = document.querySelector(".taskDone ul");
const dltAll = document.querySelector(".DeleteAll");

// Prevent the form from submitting
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

addBtn.addEventListener("click", (e) => {
    if(input.value !== "") {

        // Create new task item
        const newLi = document.createElement("li");
        newLi.classList.add("inputs");
        newLi.innerText = input.value;

        // Create "Done" button for the task item
        const compltBtn = document.createElement("button");
        compltBtn.classList.add("complete");
        compltBtn.innerText = "Done";
        compltBtn.type = "button"; // Ensure this button does not submit the form

        // Add event listener to "Done" button
        compltBtn.addEventListener("click", () => {
            // Move the task item to the taskDone section
            taskDone.appendChild(newLi);
            newLi.removeChild(compltBtn); // Remove the "Done" button after moving
            newLi.removeChild(dltBtn)
        });

        const dltBtn = document.createElement("button")
        dltBtn.classList.add("delete")
        dltBtn.type = "button"
        dltBtn.innerText = "Delete";

        dltBtn.addEventListener("click", ()=> {
            form.removeChild(newLi)
        })

        // Append the "Done" button to the task item
        newLi.appendChild(compltBtn);

        // Append the delete button to the form
        newLi.appendChild(dltBtn);

        // Append the new task item to the form
        form.appendChild(newLi);



        // Clear the input field
        input.value = "";
    } else {
        alert("Please enter text");
    }
});

dltAll.addEventListener("click", ()=> {
    form.innerHTML = ""
    taskDone.innerHTML = ""
})
