import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tells Apollo we will take care of everything
    read(exisitng = [], { args, cache }) {
      // args are gonna be the first and skip value from Products.js
      // cache will be the cache from apollo client

      const { first, skip } = args;

      // Read the number of items on the page from the cache

      const data = cache.readQuery({ query: PAGINATION_QUERY });

      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // Check if we have existing items
      const items = exisitng.slice(skip, skip + first).filter((x) => x);

      // if
        // There are items
        // AND there aren't enough items to satisfy how many were requested
        // AND we are on the last page
      // THEN JUST SEND IT

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // We don't have any items, we must go to the network to fetch them
        return false;
      }

      // if there are items, just return them from the cache, and we don't need to go to the network

      if (items.length) {
        return items;
      }

      return false; // fallback to network
    },
    merge(exisiting, incoming, { args }) {
      // This runs when the Apollo client comes back from the network with our product

      const { first, skip } = args;

      const merged = exisiting ? exisiting.slice(0) : [];

      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      // finally we return the merged items from the cache
      return merged;
    },
  };
}
