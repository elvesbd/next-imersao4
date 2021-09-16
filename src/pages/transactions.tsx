import { Column } from '@devexpress/dx-react-grid';
import { Container, Typography } from "@material-ui/core";
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { SortingState } from '@devexpress/dx-react-grid';
const columns: Column[] = [
  {
    name: 'payment_day',
    title: 'Data pag'
  },
  {
    name: 'name',
    title: 'Nome'
  },
  {
    name: 'category',
    title: 'Categoria'
  },
  {
    name: 'type',
    title: 'Operação'
  },
  {
    name: 'created_at',
    title: 'Criado em'
  }
];

const TransactionsPage = (props) => {
  return (
    <Container>
      <Typography component="h1" variant="h4">
        Minhas Transações
      </Typography>

      <Grid rows={[]} columns={columns}>
        <Table />
        <SortingState defaultSorting={[{ columnName: 'created_at', direction: 'asc'}]}/>
        <TableHeaderRow showSortingControls/>
      </Grid>
    </Container>
  );
}

export default TransactionsPage;
