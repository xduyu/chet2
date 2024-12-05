// const expensesNew = document.getElementById('expenses__new')
// const expensesSum = document.getElementById('expenses__sum')
const expensesBtn = document.getElementById('expensesBtn')
const сategory = document.getElementById('сategory')
const expensesList = document.getElementById('expenses__list')
const expensesTotal = document.getElementById('expenses__total')
const expenses__filter = document.getElementById('expenses__filter')


let expense = [];

expensesBtn.addEventListener('click', () => {
    const sum = +document.getElementById('expenses__sum').value;
    const name = document.getElementById('expenses__new').value;
    const category = document.getElementById('expenses__filter').value;
    if (name && !isNaN(sum)) {
        expense.push({ name: name, sum: sum, category: category })
    }
    console.log('2')
})

function renderExpense() {
    const filterValue = expenses__filter.value;

    const filteredExpense = (filterValue === "Все" ? expense : expense.filter(el => {
        return el.category == filterValue
    }))

    filteredExpense.forEach(el => {
        const liItem = document.createElement('li')
        liItem.innerHTML = `${el.name} ${el.sum} ${el.category}`
        expensesList.append(liItem)
    });
}