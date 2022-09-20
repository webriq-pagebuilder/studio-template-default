/* 
  Call this functional component to update the existing schemas from included plugins with the changes from the custom folder
*/

export const mergeReplaceAndAdd = (existingItems, newItems) => {
  const updatedItems = existingItems.map((existingItem) => {
    const searchedIndex = newItems
      .map((newItem) => newItem.name)
      .indexOf(existingItem.name);

    if (searchedIndex >= 0) {
      return newItems[searchedIndex];
    }

    return existingItem;
  });

  const additionalSchemas = newItems.reduce((all, current) => {
    if (!existingItems.map((i) => i.name).includes(current.name)) {
      all = [...all, current];
    }

    return all;
  }, []);

  return [...updatedItems, ...additionalSchemas];
};
