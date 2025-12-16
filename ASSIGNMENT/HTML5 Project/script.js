let display = document.getElementById("display");


function press(value) {
display.value = display.value + value;
}


function del() {
display.value = display.value.slice(0, -1);
}


function calculate() {
if (display.value === "") return;


try {
display.value = eval(display.value);
} catch (error) {
display.value = "Error";
}
}