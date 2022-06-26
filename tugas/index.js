




function getData(url, cb) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            return cb(JSON.parse(xhr.responseText));
        }
    };
    xhr.open("GET", url);
    xhr.send();
}

const dataUser = getData("https://jsonplaceholder.typicode.com/users", function (dataUser) {
    console.log(dataUser);



    columns = ["Name", "Jurusan", "No. Telp", "Alamat"],

        data = dataUser.forEach(function (dataUser) {

            return [dataUser.id, dataUser.name, dataUser.username, dataUser.email, dataUser.address.street + dataUser.address.suite + dataUser.address.city, dataUser.company.name]
            // console.log(dataUser.id, dataUser.name, dataUser.username, dataUser.email, dataUser.address.street + dataUser.address.suite + dataUser.address.city, dataUser.company.name);
        })
    // data: [
    //     ["Bagus Perdana", "Teknik Informatika", "082148399289", "Jakarta"],
    //     ["Anna Purwanti", "Sistem Informasi", "08125577822", "Bogor"],
    //     ["Nuryadi Cahyadi", "Teknik Informatika", "08387427721", "Depok"],
    //     ["Setia Asih", "Teknik Informatika", "08213481112", "Tangerang"],
    //     ["Andi Prayoga", "Sistem Informasi", "08156777689", "Bekasi"]
    // ]

    function createHeader(data) {
        let open = "<thead><tr>";
        let close = "</tr></thead>";
        data.forEach((d) => {
            open += `<th>${d}</th>`;
        });

        return open + close;
    }

    function createBody(data) {
        let open = "<tbody>";
        let close = "</tbody>";

        data.forEach((d) => {
            open += `
              <tr>
                <td>${d[0]}</td>
                <td>${d[1]}</td>
                <td>${d[2]}</td>
                <td>${d[3]}</td>
              </tr>
            `;
        });

        return open + close;
    }

    function render(element) {
        let table =
            "<table class='table table-hover'>" +
            createHeader(columns) +
            createBody(data) +
            "</table>";
        element.innerHTML = table;
    }
    const app = document.getElementById("app");
    render(app);
});


