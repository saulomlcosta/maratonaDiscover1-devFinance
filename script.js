 modalControls = () => 
  document.querySelector('.modal-overlay').classList.toggle("active");

const transactionsData = [
  {
     id: 1,
     description: 'Luz',
     amount: -50000,
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
    amount: -20000,
    date: '23/01/2021'
  },
  {
    id: 4,
    description: 'App',
    amount: 25000,
    date: '23/01/2021'
  },
]

const transaction = {
  incomes() {

  },
  expenses() {

  },
  total() {

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
    }
}

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
