export const toEntities = (array: any[], initial) => {
  return array.reduce((entities, item) => {
    return {
      ...entities,
      [item._id]: item
    };
  }, initial);
};

export function toArray(entities) {
  return Object.keys(entities).map(_id => entities[_id]);
}
