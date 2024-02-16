/* eslint-disable react/prop-types */
import UpdateProduct from '../components/Update';

export default function UpdatePage({ query }) {
  return <UpdateProduct id={query.id} />;
}
