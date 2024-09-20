const cashRegister = {
    itemsForSale: {
        "Phone": 300,
        "Smart TV": 220,
        "Gaming Console": 150
    },
    cart: [],

    addItem: function(itemName) {
        if (this.itemsForSale[itemName]) {
            this.cart.push(itemName);
            console.log(`${itemName} added to the shopping cart.`);
        } else {
            console.log(`We don't sell ${itemName}.`);
        }
    },

    calculateTotalPrice: function() {
        let totalPrice = 0;
        for (let item of this.cart) {
            totalPrice += this.itemsForSale[item];
        }
        return totalPrice;
    },

    applyDiscount: function(totalPrice) {
        if (totalPrice > 400) {
            const discount = totalPrice * 0.10;
            totalPrice -= discount;
            console.log(`A 10% discount of $${discount.toFixed(2)} has been applied.`);
        }
        return totalPrice;
    },

    pay: function(paymentAmount) {
        let totalPrice = this.calculateTotalPrice();
        totalPrice = this.applyDiscount(totalPrice);

        console.log(`Total price to pay: $${totalPrice.toFixed(2)}`);
        if (paymentAmount >= totalPrice) {
            const change = paymentAmount - totalPrice;
            console.log(`Payment accepted. Thank you for your purchase!`);
            if (change > 0) {
                console.log(`Your change is $${change.toFixed(2)}.`);
            }
            this.cart = []; 
        } else {
            console.log(`Insufficient funds. You still owe $${(totalPrice - paymentAmount).toFixed(2)}.`);
        }
    }
};

// Example usage
cashRegister.addItem("Phone");
cashRegister.addItem("Smart TV");
cashRegister.addItem("Gaming Console");
cashRegister.addItem("Laptop");
cashRegister.pay(700); 
