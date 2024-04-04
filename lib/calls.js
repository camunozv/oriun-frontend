// Here it's going to be written the whole code for fetching data from the local dummy-database
// its worth klaar zu machen, dass in dieser Teil der App nur ist, um sachen auszuprobieren.
// Deswegen würde diese Inhalte nicht in github Repos gefunden.
import sql from "better-sqlite3";

const db = sql('calls.db'); // database connection is stablished, durch dieses Objekt kann Man Dinge mit der Db machen.

export async function getCalls() { // Muss alle die Daten von der Db erreichen.
    // .run() müss nur verwendet werden, wenn man neue daten in der Db stecken will.
    // andererseits müss man .all() verwenden, ob man Auskunft haben will.
    // Wenn man "async" neben der Funktion schreibt, werde die Funktion ein Promise geben.

    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM calls').all();

}
 
