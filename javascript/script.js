let arr = [];


function inputfunction() {

    let pro_name = document.getElementById("productname");
    let pro_price = document.getElementById("productprice");
    let pro_category = document.getElementById("category");
    let pro_img = document.getElementById("productimg");

    if (pro_name.value == "" || pro_price.value == "" || pro_category.value == "" || pro_img.value == "") {
        alert("Missing Values")
    } else
        if (pro_price.value < 0) {
            alert("Ivalid product Price");
        } else {
            let obj = {
                prname: pro_name.value,
                prprice: pro_price.value,
                prcatalog: pro_category.value,
                primage: pro_img.value,
            };

            tabelFuny(pro_name.value, pro_price.value, pro_category.value, pro_img.value);
            set_local_storage(obj);
            name = "";
            price = "";
            category = "";
            image = "";
        }
}

function tabelFuny(name, price, category, image) {


    let table = document.getElementById("datadisplay");
    let commontr = document.createElement("tr");

    let p_namedata = document.createElement("td");
    let p_namelabel = document.createElement("label");

    let p_pricedata = document.createElement("td");
    let p_pricelabel = document.createElement("label");

    let p_categorydata = document.createElement("td");
    let p_categorylabel = document.createElement("label");

    let p_imgdata = document.createElement("td");
    let p_imglabel = document.createElement("img");

    p_namelabel.textContent = name;
    p_namedata.appendChild(p_namelabel);
    commontr.appendChild(p_namedata);
    table.appendChild(commontr);

    p_pricelabel.textContent = price;
    p_pricedata.appendChild(p_pricelabel);
    commontr.appendChild(p_pricedata);
    table.appendChild(commontr);

    p_categorylabel.textContent = category;
    p_categorydata.appendChild(p_categorylabel);
    commontr.appendChild(p_categorydata);
    table.appendChild(commontr);

    p_imglabel.src = image;
    p_imgdata.appendChild(p_imglabel);
    commontr.appendChild(p_imgdata);
    table.appendChild(commontr);
}

function set_local_storage(obj) {
    arr.push(obj);
    localStorage.setItem("productdata", JSON.stringify(arr));
}

function get_local_storage() {
    if (localStorage.getItem("productdata")) {
        arr = JSON.parse(localStorage.getItem("productdata"));
        for (let i = 0; i < arr.length; i++) {
            tabelFuny(arr[i].prname, arr[i].prprice, arr[i].prcatalog, arr[i].primage);
        }
    }
}

get_local_storage();
document.getElementById("cleardata").addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});


