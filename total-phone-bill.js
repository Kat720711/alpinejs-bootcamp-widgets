function totalPhoneBillWidget() {
    return {
        phoneString: '',
        totalBill: '',
        calculateBill() {
            const items = this.phoneString.split(', ');
            let callCount = 0;
            let smsCount = 0;
            
            items.forEach(item => {
                if (item === 'call') {
                    callCount++;
                } else if (item === 'sms') {
                    smsCount++;
                }
            });
            
            const totalCost = (callCount * 2.75) + (smsCount * 0.65);
            this.totalBill = `R${totalCost.toFixed(2)}`;
        }
    };
}
