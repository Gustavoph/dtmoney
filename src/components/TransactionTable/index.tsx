import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './style';

interface transactions {
  id: number,
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: string
}

export function TransactionalTable() {
  const [transactions, setTransactions] = useState<transactions[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => {console.log(response.data.transactions)
        setTransactions(response.data.transactions)})
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions && transactions.map(transaction => {
            return (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.type}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
              </td>
            </tr>
            )
          })}
          
        </tbody>
      </table>
    </Container>
  )
}