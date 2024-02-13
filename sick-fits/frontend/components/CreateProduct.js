/* eslint-disable react-hooks/rules-of-hooks */
import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    image: '',
    name: 'Nice Shoes',
    price: 30,
    description: 'These are the best shoes',
  });

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputs);
      }}
    >
      <fieldset>
        <label htmlFor="image">
          Image
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs?.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="1000"
            value={inputs?.price}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="price"
            placeholder="Description"
            value={inputs?.description}
            onChange={handleChange}
            required
          />
        </label>
        {/* <button type="button" onClick={resetForm}>
          Reset Form
        </button>
        <button type="button" onClick={clearForm}>
          Clear Form
        </button> */}
        <button type="submit">+ Add product</button>
      </fieldset>
    </Form>
  );
}
