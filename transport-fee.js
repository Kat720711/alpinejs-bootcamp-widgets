function transportFeeWidget() {
    return {
        shift: 'morning',
        feeMessage: '',
        calculateFee() {
            if (this.shift === 'morning') {
                this.feeMessage = 'The shift transport fee is R20';
            } else if (this.shift === 'afternoon') {
                this.feeMessage = 'The shift transport fee is R10';
            } else if (this.shift === 'nightshift') {
                this.feeMessage = 'The shift transport fee is free';
            } else {
                this.feeMessage = 'Invalid Shift';
            }
            console.log(this.feeMessage); 
        }
    };
}
