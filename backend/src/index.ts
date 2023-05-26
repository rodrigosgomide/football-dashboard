import app from "./app";
import AppDataSource from "./infra/database/mySQL"

const PORT = 3000
app.listen(() =>{
    console.log('Server rodando na porta: ' + PORT);
});


AppDataSource.initialize()
    .then(() => {
        console.log('Hora do show!');
    })
    .catch((error) => console.log(error))