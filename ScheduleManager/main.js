const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;
let currentYear = todayYear;
let currentMonth = todayMonth;

const createThead = () => {
    let thead = document.getElementById("thead");
    let tr = document.createElement("tr");

    const weekList = ["月", "火", "水", "木", "金", "土", "日"];

    for (let i = 0; i < weekList.length; i++) {
        let th = document.createElement("th")
        th.textContent = weekList[i]
        tr.appendChild(th);
    }
    thead.appendChild(tr);
}

createThead();

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
    console.log(endOfMonth);

    weekLoop: for (let w = 0; w <= 5; w++) {
        let tr = document.createElement("tr");
        for (let d = 1; d <= 7; d++) {
            let td = document.createElement("td");
            if (w * 7 + d - begineOfMonth >= 0) {
                td.textContent = w * 7 + d - begineOfMonth + 1;
            } else {
                td.textContent = "";
            }
            if (w * 7 + d - begineOfMonth + 1 >= endOfMonth) {
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