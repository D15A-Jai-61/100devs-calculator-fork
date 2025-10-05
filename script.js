class Calculator {
document.querySelector('button[data-action="delete"]').addEventListener('click', () => calculator.delete());
document.querySelector('button[data-action="equals"]').addEventListener('click', () => calculator.compute());
document.querySelector('button[data-action="percent"]').addEventListener('click', () => calculator.percent());


// keyboard support
window.addEventListener('keydown', (e) => {
if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
e.preventDefault();
calculator.appendNumber(e.key);
return;
}
if (['+','-','*','/'].includes(e.key)){
e.preventDefault();
calculator.chooseOperation(e.key);
return;
}
if (e.key === 'Enter' || e.key === '='){
e.preventDefault();
calculator.compute();
return;
}
if (e.key === 'Backspace'){
e.preventDefault();
calculator.delete();
return;
}
if (e.key.toLowerCase() === 'c'){
e.preventDefault();
calculator.clear();
return;
}
if (e.key === '%'){
e.preventDefault();
calculator.percent();
return;
}
});