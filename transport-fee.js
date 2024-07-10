function transportFeeWidget() {
    return {
        shift: 'morning',
        transportFee() {
            if (this.shift === 'morning') {
                return 'R20';
            } else if (this.shift === 'afternoon') {
                return 'R10';
            } else if (this.shift === 'nightshift') {
                return 'free';
            } else {
                return 'Invalid Shift';
            }
        }
    };
}
