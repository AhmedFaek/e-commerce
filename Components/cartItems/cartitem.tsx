import { IoBagAdd } from "react-icons/io5";
import './cartitems.css';
import { CiSquareRemove } from "react-icons/ci";
import { useCart } from "react-use-cart";

export default function CartItems() {
    const {
        totalItems,
        cartTotal,
        items,
        isEmpty,
        totalUniqueItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return <h1>Your Cart Is Empty</h1>;

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {items.map((item) => (
                <div key={item.id}>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={item.img} alt="" className="carticon-product-icon" />
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                        <div className="cartitems-quantity">
                            <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 1) - 1)}>-</button>
                            <span>{item.quantity ?? 1}</span>
                            <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 1) + 1)}>+</button>
                        </div>
                        <p>${(item.price * (item.quantity ?? 1)).toFixed(2)}</p>
                        <CiSquareRemove className="cartitems-remove-icon" onClick={() => removeItem(item.id)} />
                    </div>
                    <hr />
                </div>
            ))}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${cartTotal.toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${cartTotal.toFixed(2)}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
