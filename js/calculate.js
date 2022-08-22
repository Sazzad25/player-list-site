document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerField = document.getElementById('per-player');
    const perPlayerFieldString = perPlayerField.value;
    const perPlayerAmount = parseFloat(perPlayerFieldString);

    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesAmount = parseFloat(playerExpensesString);

    const playerExpensesTotal = perPlayerAmount * 5;
    playerExpenses.innerText = playerExpensesTotal;
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesAmount = parseFloat(playerExpensesString);

    const managerField = document.getElementById('manager-total');
    const managerFieldString = managerField.value;
    const managerFieldAmount = parseFloat(managerFieldString);

    const coachField = document.getElementById('coach-total');
    const coachFieldString = coachField.value;
    const coachFieldAmount = parseFloat(coachFieldString);

    const expensesElement = document.getElementById('expenses-total');
    const expensesElementString = expensesElement.innerText;
    const expensesElementAmount = parseFloat(expensesElementString);

    const totalExpenses = playerExpensesAmount + managerFieldAmount + coachFieldAmount;
    expensesElement.innerText = totalExpenses;

})