import { selector } from "recoil";
import { cartItemState } from "../atoms/cartItemState";

export const cartTotalSelector = selector({
    key: "cartTotalSelector",
    get: ({get}) => {
        const cartItems = get(cartItemState)
        let total;
        cartItems.forEach(item => {
            total += item.price;
        });
        return total;
    }
})