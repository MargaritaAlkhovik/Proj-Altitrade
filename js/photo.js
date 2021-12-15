
let n = 1, p = 8; a = "";
links = [];
services = [ "Рекламное оформление торговой точки", "Световые короба", "Объемные световые буквы",
             "Широкоформатная печать", "Крышные установки", "Рекламные конструкции", "Согласование вывесок",
             "Сопутствующие услуги" ];

// function find() {
//     let listS = document.getElementById('list_services');
//     let listSA = listS.getElementsByTagName('li');
//     let s = ""; let a = "";
//     s = listSA[n-1].innerHTML;
//     a += `${s}`;
//     between.innerHTML = a;
// }

function find() {
    a = services[n-1];
    between.innerHTML = `<a href="#">${a}</a>`;
}

function changePic() {
    if( n > p ) n = 1;
    im.src = `Images/types_img/${n}.jpg`;
    lnk.href = links[n-1];
    find();
    n++;
    timerID = setTimeout(changePic, 4000)
}

function stop() {
    clearTimeout(timerID);
}

function next() {
    if (n == 8) n = 1; else n++;
    im.src = `Images/types_img/${n}.jpg`;
    lnk.href = links[n-1];
    find();
}

function before() {
    if (n == 1) n = 8; else n--;
    im.src = `Images/types_img/${n}.jpg`;
    lnk.href = links[n-1];
    find();
}