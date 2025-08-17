function runBasics(inputValue) {
  const out = document.getElementById('output');
  out.textContent = "Waiting 2 seconds…";

  new Promise((resolve) => {
    setTimeout(() => resolve(inputValue), 2000);
  }).then((msg) => {
    console.log("Promise Basics:", msg);
    out.textContent = "Promise Basics: " + msg;
  });
}

function runChaining(inputValue) {
  const out = document.getElementById('output');
  const number = parseInt(inputValue);

  if (isNaN(number)) {
    out.textContent = "Please enter a valid number!";
    return;
  }

  out.textContent = "Running chain…";
  Promise.resolve(number)
    .then((num) => num * 2)
    .then((num) => num - 3)
    .then((result) => {
      console.log("Promise Chaining:", result);
      out.textContent = "Promise Chaining: " + result;
    });
}

function runError(inputValue) {
  const out = document.getElementById('output');

  new Promise((resolve, reject) => {
    if (inputValue.toLowerCase() === "error") {
      reject("Something went wrong!");
    } else {
      resolve("You entered: " + inputValue);
    }
  })
    .then((msg) => {
      console.log("Success:", msg);
      out.textContent = msg;
    })
    .catch((err) => {
      console.error("Error Handling:", err);
      out.textContent = "Error Handling: " + err;
    });
}

function runCustom(inputValue) {
  const out = document.getElementById('output');
  if (!inputValue) {
    out.textContent = "Please enter some text!";
    return;
  }

  Promise.resolve(inputValue)
    .then((txt) => txt.toUpperCase())
    .then((result) => {
      console.log("Custom UpperCase:", result);
      out.textContent = "Custom Result: " + result;
    });
}

function runSelectedTask() {
  const task = document.getElementById('taskSelect').value;
  const inputValue = document.getElementById('userInput').value;

  switch (task) {
    case "basics":
      runBasics(inputValue);
      break;
    case "chaining":
      runChaining(inputValue);
      break;
    case "error":
      runError(inputValue);
      break;
    case "custom":
      runCustom(inputValue);
      break;
    default:
      document.getElementById('output').textContent = "Please select a task!";
  }
}
