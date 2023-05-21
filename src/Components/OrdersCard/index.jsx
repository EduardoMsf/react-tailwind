
export const OrdersCard = (props) => {

  const { totalPrice, totalPrpducts } = props;
  return (
    <div className="flex justify-between items-center my-2 border border-black">
      <p>
        <span>01.02.23</span>
        <span>{totalPrpducts}</span>
        <span>{totalPrice}</span>
      </p>

    </div>
  )
}
