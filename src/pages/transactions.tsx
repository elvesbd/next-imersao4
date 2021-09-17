import {
  Column,
  IntegratedFiltering,
  IntegratedPaging,
  PagingState,
  SearchState,
  SortingState,
} from '@devexpress/dx-react-grid';
import { Container, Typography } from "@material-ui/core";
import {
  Grid,
  Table,
  TableHeaderRow,
  Toolbar,
  SearchPanel,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';

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

const TransactionsPage = () => {
  return (
    <Container>
      <Typography component="h1" variant="h4">
        Minhas Transações
      </Typography>

      <Grid rows={[]} columns={columns}>
        <Table />
        <SearchState defaultValue="Paris"/>
        <SortingState defaultSorting={[{ columnName: 'created_at', direction: 'asc'}]}/>
        <PagingState defaultCurrentPage={0} pageSize={5}/>
        <TableHeaderRow showSortingControls/>
        <IntegratedFiltering />
        <Toolbar />
        <SearchPanel />
        <PagingPanel />
        <IntegratedPaging />
      </Grid>
    </Container>
  );
}

export default TransactionsPage;
