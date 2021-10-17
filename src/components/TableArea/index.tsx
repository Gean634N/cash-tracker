import * as C from './styles';
import { Item } from '../../types/Item';
import { TabelItem } from '../TableItem'

type Props = {
  list: Item[]
}

export const TableArea = ({ list }: Props) => {
  console.log(list);
  
  return(
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TabelItem key={ index } item={ item } />
        ))}
      </tbody>
    </C.Table>
  );
}