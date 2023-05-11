const dialogController = {
    home: (req, res) => {
        res.send('Hello World!')
    },
    dialogs: (req, res) => {
        const dialogs = [
            {
                question: "salut",
                answer: "coucou"
            },
            {
                question: "ça va ?",
                answer: "bien et toi ?"
            },
            {
                question: "quel age as-tu ?",
                answer: "22 ans"
            }
        ]
        res.status(200).json({ message: dialogs })
    },
    dialogp: (req, res) => { 
        console.log(req.body.question)
        let matchFound=false;
        const dialogs=[
            {
                question : "salut",
                answer : "coucou"
            },
            {
                question : "ca va?",
                answer : "oui et toi?"
            },
            {
                question : "quel age as tu?",
                answer : "22 ans"
            }
        ]
        dialogs.forEach(dialog =>{
            if(dialog.question === req.body.question){
                matchFound = true;
                res.status(200).json({Response : dialog.answer})
                return
            }
        })
        if(!matchFound){
            res.status(200).json({message: "pas de réponse a vous apporter"})
        }
    }
}

module.exports = dialogController