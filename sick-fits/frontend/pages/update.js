/* eslint-disable react/prop-types */
import UpdateProduct from '../components/UpdateProduct';

export default function UpdatePage({ query }) {
  console.log(query);
  return <UpdateProduct id={query.id} />;
}
