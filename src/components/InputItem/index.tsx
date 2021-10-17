import * as C from './styles';
import { categories } from '../../data/categories'

type Props = {
  title: string;
  type: string;
  options?: string[];
  value: string;
  handleChange: (value: string) => void
}

export const InputItem = ({ title, type, options, value, handleChange }: Props) => {
  const dictionary = (categoy: string) => {
    let currentCategory = Object.keys(categories).filter((key) => categories[key].title === categoy)[0];
    handleChange(currentCategory);
  }

  return (
    <C.Container>
      <C.Title>{ title }</C.Title>
      {
        type === 'select'
        ? <C.Select onChange={ e => dictionary(e.target.value) } >
          <option value="" disabled selected></option>
          { options?.map((option, index) => (
            <option key={ index } value={ option }>{ option }</option>
          )) }
        </C.Select>
        : <C.Input type={ type } onChange={ e => handleChange(e.target.value) } value={ value }></C.Input>
      }
    </C.Container>
  );
}
