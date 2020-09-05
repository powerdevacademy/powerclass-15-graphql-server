const testResolver = {
    Test: {
        via: (test: any) => {
            //operação que me retornasse um objeto do tipo Media
            return {
                    name: "Correio"
            }
        }
    },
    Media: {
        eta: () => 365*24*60
    },
    Query: {
        talk: () => ({
            message: "Olá Dev"
        })
    }
}

export default testResolver;