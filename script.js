 modalControls = () => 
  document.querySelector('.modal-overlay').classList.toggle("active");

const transactionsData = [
  {
     id: 1,
     description: 'Luz',
     amout: -50000,
     date: '23/01/2021'
  },
  {
    id: 2,
    description: 'Website',
    amout: 500000,
    date: '23/01/2021'
  },
  {
    id: 3,
    description: 'Internet',
    amout: -20000,
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
  
  innerHTMLtransaction() {
    
    const html = ` 
    <tr>
        <td class="description">Internet</td>
        <td class="expense">-R$ 200,00</td>
        <td class="date">23/01/2021</td>
        <td>
          <img src="./assets/minus.svg" alt="Remover transação">
        </td>
    </tr>
    `
  }
}