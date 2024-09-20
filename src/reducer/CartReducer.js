export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {

        case "ADD_TO_CART":
            return null;

        case "REMOVE_TO_CART":
            return null;

        default:
            throw new Error("no case found");
            ;


    }
} 