const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;
let currentYear = todayYear;
let currentMonth = todayMonth;
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const mask = document.getElementById('mask');
const weekList = ["月", "火", "水", "木", "金", "土", "日"];

close.addEventListener("click", () => {
    modal.classList.add("hidden");
    mask.classList.add('hidden');
});

mask.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
});

const createThead = () => {
    let thead = document.getElementById("thead");
    let tr = document.createElement("tr");

    for (let i = 0; i < weekList.length; i++) {
        let th = document.createElement("th")
        th.textContent = weekList[i]
        tr.appendChild(th);
    }
    thead.appendChild(tr);
}

createThead();
const showModal = (d, day) => {
    let modalTitle = document.getElementById("modalTitle");
    modalTitle.textContent = `${currentMonth}月${day}日（${weekList[d - 1]}）`;
    modal.classList.remove("hidden");
    mask.classList.remove('hidden');
}

const creatCalendar = (year, month) => {
    let tbody = document.getElementById("tbody");
    const date = new Date(`${year}/${month}/1`);
    date.setDate(1);
    let begineOfMonth = new Date(date).getDay();
    if (begineOfMonth === 0) {
        begineOfMonth = 7;
    }
    // 翌月にする
    date.setMonth(date.getMonth() + 1)
    // 0日=前月末日　になる
    date.setDate(0);
    const endOfMonth = new Date(date).getDate();

    weekLoop: for (let w = 0; w <= 5; w++) {
        let tr = document.createElement("tr");
        for (let d = 1; d <= 7; d++) {
            let td = document.createElement("td");
            let day = w * 7 + d - begineOfMonth + 1;
            if (w * 7 + d - begineOfMonth >= 0) {
                td.textContent = day;
                td.classList.add("pointer");
                td.addEventListener("click", () => {
                    showModal(d, day)
                });
            } else {
                td.textContent = "";
            }
            if (day >= endOfMonth) {
                tr.appendChild(td);
                tbody.appendChild(tr);
                break weekLoop;
            }

            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}




const setTitle = (year, month) => {
    let title = document.getElementById("title");
    title.textContent = `${year}年${month}月`;
}

const changeCalendar = (year, month) => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    setTitle(year, month);
    creatCalendar(year, month);
}

const addMonth = document.getElementById("addMonth");
addMonth.addEventListener("click", (e) => {
    currentMonth++;
    if (currentMonth === 13) {
        currentMonth = 1;
        currentYear++;
    }
    changeCalendar(currentYear, currentMonth);
});

const dowmMonth = document.getElementById("downMonth");
downMonth.addEventListener("click", (e) => {
    currentMonth--;
    if (currentMonth === 0) {
        currentMonth = 12;
        currentYear--;
    }
    changeCalendar(currentYear, currentMonth);
});



changeCalendar(2022, 7);

let timeSelect = () => {
    let startHour = document.getElementById("startHour");
    for (let h = 0; h < 24; h++) {
        let strH = ('00' + h).slice(-2);
        let option = document.createElement("option");
        option.value = `${strH}`;
        option.textContent = `${strH}`;
        startHour.appendChild(option);

    }

    let startMin = document.getElementById("startMin");
    for (let m = 0; m < 60; m += 15) {
        let strM = ('00' + m).slice(-2);
        let option = document.createElement("option");
        option.value = `${strM}`;
        option.textContent = `${strM}`;
        startMin.appendChild(option);
    }


    let endHour = document.getElementById("endHour");
    for (let h = 0; h < 24; h++) {
        let strH = ('00' + h).slice(-2);
        let option = document.createElement("option");
        option.value = `${strH}`;
        option.textContent = `${strH}`;
        endHour.appendChild(option);
    }

    let endMin = document.getElementById("endMin");
    for (let m = 0; m < 60; m += 15) {
        let strM = ('00' + m).slice(-2);
        let option = document.createElement("option");
        option.value = `${strM}`;
        option.textContent = `${strM}`;
        endMin.appendChild(option);
    }
}

timeSelect();


let value = localStorage.getItem();
localStorage.setItem();