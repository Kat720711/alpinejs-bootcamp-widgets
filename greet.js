function greetWidget() {
    return {
        name: '',
        language: 'en',
        greetingMessage: '',
        greetings: {
            en: 'Hello',
            es: 'Hola',
            fr: 'Bonjour'
        },
        greet() {
            const greeting = this.greetings[this.language];
            this.greetingMessage = `${greeting}, ${this.name}`;
            console.log(this.greetingMessage); 
        }
    };
}


