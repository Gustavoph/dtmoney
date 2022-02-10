import { Summary } from '../Summary';
import { TransactionalTable } from '../TransactionTable';
import { Container } from './style';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionalTable />
    </Container>
  )
}