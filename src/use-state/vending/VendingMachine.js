const VendingMachine = ( inventory ) => {
  
  let drinks = inventory || null;

  if (!drinks) {
    throw new Error("No inventory: Cannot add a new VM");
  }

  const drinksKeys = Object.keys(drinks);

  const sale = (pid) => {
    if (!drinks[pid]) {
      return;
    }

    if (drinks[pid].stock > 0) {
      drinks[pid].stock--;
      return `1 ${drinks[pid].name} - Thank you, come again!!`;
    } else {
      drinks[pid].stock = 0;
      return ` ${drinks[pid].name} is out of stock :( Come back tomorrow`;
    }
  };

  const stock = () => {
    const total = drinksKeys.reduce((c, n) => c + drinks[n].stock, 0);
    return total;
  };

  return Object.freeze({ sale, stock, drinksKeys });
}

export default VendingMachine;