let num = prompt("Enter the number:");
if (num % 2 == 0 || num % 3 == 0) {
  console.log("the number is divisable by 2 or 3");
} else {
  console.log("number is not divisibale by 2 or 3");
}

const namItems = ["Home", "Services", "About US"];
namItems.map((item) => console.log(item));
