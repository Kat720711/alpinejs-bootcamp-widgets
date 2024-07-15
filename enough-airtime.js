function enoughAirtimeWidget() {
    return {
        projectedUsage: '',
        airtimeAvailable: 0,
        airtimeResult: '',
        calculateAirtime() {
            const callCost = 1.88;
            const dataCost = 12;
            const smsCost = 0.75;
            
            const actions = this.projectedUsage.split(',');
            let totalCost = 0;
            
            actions.forEach(action => {
                if (action.trim() === 'call') {
                    totalCost += callCost;
                } else if (action.trim() === 'data') {
                    totalCost += dataCost;
                } else if (action.trim() === 'sms') {
                    totalCost += smsCost;
                }
            });
            
            const airtimeLeft = this.airtimeAvailable - totalCost;
            this.airtimeResult = airtimeLeft >= 0 ? `R${airtimeLeft.toFixed(2)}` : 'R0.00';
            console.log(this.airtimeResult); 
        }
    };
}
