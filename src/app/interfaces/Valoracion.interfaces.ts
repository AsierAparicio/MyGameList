export default interface valoracion{
    id?: string;
    userID: string;
    gameID: number;

    //Datos Formulario
    valoracion: number;
    critica: string;
    listaID: number;

    //Datos Juego
    background_image: string;
    name: string;
    released: string;
    metacritic: number;
}
