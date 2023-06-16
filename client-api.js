function client_api(id) {
    id = Number(id);
    //definir l'objet XMLHTTPRequest pour envoyer la requete http
    var client = new XMLHttpRequest();
    client.open("GET", `http://localhost:8787/employes/${id}`);
    client.send();

    client.onload = () => alert(client.responseText);

}