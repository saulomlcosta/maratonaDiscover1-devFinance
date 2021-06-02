 modalControls = () => 
  document.querySelector('.modal-overlay').classList.toggle("active");

const transactionsData = [
  {
     id: 1,
     description: 'Luz',
     amount: -50001,
     date: '23/01/2021'
  },
  {
    id: 2,
    description: 'Website',
    amount: 500000,
    date: '23/01/2021'
  },
  {
    id: 3,
    description: 'Internet',
    amount: -20012,
    date: '23/01/2021'
  },
  {
    id: 4,
    description: 'App',
    amount: 200000,
    date: '23/01/2021'
  },
]

const Transaction = {
  all: transactionsData,

  add(transaction) {
    Transaction.all.push(transaction)

    console.log(Transaction.all)
  },

  incomes() {
    let income = 0;
    // take all the transactions
    // for each transaction
    Transaction.all.forEach(transactionsData => {
          // if transaction > 0
      if(transactionsData.amount > 0) {
          // assignment a an let and returns
        income += transactionsData.amount;
      }
    })
    return income;
  },
  expenses() {
    let expense = 0;
    Transaction.all.forEach(transactionsData => {
      if(transactionsData.amount < 0) {
        expense += transactionsData.amount;
      }
    })
    return expense;
  },
  total() {
    return Transaction.incomes() + Transaction.expenses();   
  }
}

const DOM = {  
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transactionsData, index) {      
      const tr = document.createElement('tr')
      tr.innerHTML = DOM.innerHTMLTransaction(transactionsData)

      DOM.transactionsContainer.appendChild(tr)

    },    
    innerHTMLTransaction(transactionsData) {
      const cssClass = transactionsData.amount > 0 ? "income" : "expense"

      const amount = utils.formatCurrency(transactionsData.amount)

      const html = `         
            <td class="description">${transactionsData.description}</td>
            <td class="${cssClass}">${amount}</td>
            <td class="date">${transactionsData.date}</td>
            <td>
              <img src="./assets/minus.svg" alt="Remover transação">
            </td>       
        `

        return html
    },

    updateBalance() {
      document
          .getElementById('incomeDisplay')
          .innerHTML = utils.formatCurrency(Transaction.incomes())
      document
          .getElementById('expenseDisplay')
          .innerHTML = utils.formatCurrency(Transaction.expenses())
      document
          .getElementById('totalDisplay')
          .innerHTML = utils.formatCurrency(Transaction.total())     
    }
}

// Format for currency of your state
const utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : ""

    value = String(value).replace(/\D/g, "")

    value = Number(value) / 100

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })

    return signal + value  
  }
}

transactionsData.forEach(function(transactionsData) {
  DOM.addTransaction(transactionsData)
})

DOM.updateBalance();

Transaction.add({
  id: 2,
  description: 'alo',
  amount: 200,
  date: '23/01/2021'
})