export const totalPrice = products => products.reduce((acc, curr) => acc + curr.price, 0)
