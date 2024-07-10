function greetWidget() {
    return {
        name: '',
        language: 'en',
        greetings: {
            en: 'Hello',
            es: 'Hola',
            fr: 'Bonjour'
        },
        greet() {
            const greeting = this.greetings[this.language];
            return `${greeting}, ${this.name}`;
        }
    };
}
