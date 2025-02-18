/*Skip to content
 
Search Gists
Search...
All gists
Back to GitHub
@gonzalezvar
gonzalezvar/gist:fb9686a504b809f6f5b837eefe1c7517 Secret
Created 4 minutes ago • Report abuse
Code
Revisions
1
Clone this repository at &lt;script src=&quot;https://gist.github.com/gonzalezvar/fb9686a504b809f6f5b837eefe1c7517.js&quot;&gt;&lt;/script&gt;
<script src="https://gist.github.com/gonzalezvar/fb9686a504b809f6f5b837eefe1c7517.js"></script>
gistfile1.txt
/* 
Funciones a elaborar:

* animateByLine: 
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* animateByChart: 
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerda que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

Para iniciar el proyecto, ejecuta node app.js

*/




const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "       ⠙⠻⠁"
]

//console.log(asciiHeart[0].length) 

const animateByChart = (ms) => {
    let delay = 0
    for (let i = 0; i < asciiHeart.length; i++) {
        for (let j = 0; j < asciiHeart[i].length; j++) {
            if (j === asciiHeart[i].length - 1) {
                setTimeout(() => {
                    process.stdout.write(asciiHeart[i][j])
                    console.log('')
                }, delay += ms);

            }
            else {
                setTimeout(() => {
                    process.stdout.write(asciiHeart[i][j])
                }, delay += ms);

            }

        }


    }

}





const animateByLine = (ms) => {
    let delay = 0
    for (let i = 0; i < asciiHeart.length; i++) {

        setTimeout(() => {
            console.log(asciiHeart[i])
        }, delay += ms);


    }
}


//animateByChart(100)
animateByLine(100)
