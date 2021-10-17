import * as C from './styles';
import { Item } from '../../types/Item';
import { InputItem } from '../../components/InputItem';
import { categories } from '../../data/categories'
import { useEffect, useState } from 'react';


type Props = {
  onAdd: (item: Item) => void;
}

export const ImputArea = ({ onAdd }: Props) => {
  const [options, setOptions] = useState<string[]>([]);

  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState('0');

  useEffect(() => {
    let currentOptions = Object.keys(categories).map((key) => categories[key].title);
    setOptions(currentOptions);
  }, [categories])

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField('0');
  }

  const handleAddEvent = () => {
    let errors: string[] = [];

    if(isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if(categoryField === '') {
      errors.push('Categoria inválida!');
    }
    if(titleField === '') {
      errors.push('Título vazio!');
    }
    if(parseInt(valueField) <= 0) {
      errors.push('Valor inválido!');
    }


    let newItem: Item = {
      date: new Date(dateField),
      category: categoryField,
      title: titleField,
      value: parseInt(valueField)
    }

    onAdd(newItem);
    clearFields();
  }

  return (
    <C.Container>
      <InputItem
        handleChange={ setDateField }
        title="Data"
        type="date"
        value={ dateField }
      />
      <InputItem
        handleChange={ setCategoryField }
        title="Categoria"
        type="select"
        value={ categoryField }
        options={ options }
      />
      <InputItem
        handleChange={ setTitleField }
        title="Título"
        type="text"
        value={ titleField }
      />
      <InputItem
        handleChange={ setValueField }
        title="Valor"
        type="number"
        value={ valueField }
      />
      <C.Button onClick={ handleAddEvent }>Adicionar</C.Button>
    </C.Container>
  );
};