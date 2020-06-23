export const getQuantities = items =>
  items.reduce((sum, item) => sum + item.quantity, 0);

export const getTotal = items =>
  items.reduce((sum, item) => sum + item.quantity * item.price, 0);
