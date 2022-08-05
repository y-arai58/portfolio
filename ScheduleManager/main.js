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
const DISP_MEMO_MAX = 2;
let targetDivId;
const getDetaObject = (year, month, day, index) => {
    return {
        memo: localStorage.getItem(`${year}_${month}_${day}_memo_${index}`),
        startHour: localStorage.getItem(`${year}_${month}_${day}_startHour_${index}`),
        startMin: localStorage.getItem(`${year}_${month}_${day}_startMin_${index}`),
        endHour: localStorage.getItem(`${year}_${month}_${day}_endHour_${index}`),
        endMin: localStorage.getItem(`${year}_${month}_${day}_endMin_${index}`)
    }
}

const changeTargetDiv = () => {
    let targetDiv = document.getElementById(targetDivId);
    targetDiv.innerHTML = "";
    keyList = targetDivId.split('-');
    let year = keyList[0];
    let month = keyList[1];
    let day = keyList[2];
    let index = Number(localStorage.getItem(`${year}_${month}_${day}_index`));
    let plusCnt = 0;
    if (index > DISP_MEMO_MAX) {
        plusCnt = index - DISP_MEMO_MAX;
        index = DISP_MEMO_MAX;
    }
    for (let i = 1; i <= index; i++) {
        let data = getDetaObject(year, month, day, i);
        let p = document.createElement("p");
        p.textContent = data.memo;
        targetDiv.appendChild(p);
    }
    if (plusCnt) {
        let p = document.createElement("p");
        p.textContent = `+${plusCnt}`;
        targetDiv.appendChild(p);
    }
}

close.addEventListener("click", () => {
    modal.classList.add("hidden");
    mask.classList.add('hidden');
    changeTargetDiv();
});

mask.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
    changeTargetDiv();
});

const createThead = () => {
    let thead = document.getElementById("thead");
    let tr = document.createElement("tr");

    for (let i = 0; i < weekList.length; i++) {
        let th = document.createElement("th")
        th.textContent = weekList[i]
        if (i >= 5) {
            th.classList.add("holiday");
        }
        tr.appendChild(th);
    }
    thead.appendChild(tr);
}

createThead();
const showModal = (year, month, d, day) => {
    let modalTitle = document.getElementById("modalTitle");
    modalTitle.textContent = `${currentMonth}月${day}日（${weekList[d - 1]}）`;
    initDisplayArea(year, month, day);
    setSaveEvent(year, month, day);
    modal.classList.remove("hidden");
    mask.classList.remove('hidden');
    createDisplayArea(year, month, day);
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
            let div = document.createElement("div");
            div.setAttribute("id", `${year}-${month}-${day}`);
            if (w * 7 + d - begineOfMonth >= 0) {
                let span = document.createElement("span");
                if (d >= 6) {
                    span.classList.add("holiday");
                }
                span.textContent = day;
                td.appendChild(span);
                td.classList.add("pointer");
                td.addEventListener("click", () => {
                    showModal(year, month, d, day);
                    targetDivId = `${year}-${month}-${day}`;
                });
                let index = Number(localStorage.getItem(`${year}_${month}_${day}_index`));
                let plusCnt = 0;
                if (index > DISP_MEMO_MAX) {
                    plusCnt = index - DISP_MEMO_MAX;
                    index = DISP_MEMO_MAX;
                }
                for (let i = 1; i <= index; i++) {
                    let data = getDetaObject(year, month, day, i);
                    let p = document.createElement("p");
                    p.textContent = data.memo;
                    div.appendChild(p);
                }
                if (plusCnt) {
                    let p = document.createElement("p");
                    p.textContent = `+${plusCnt}`;
                    div.appendChild(p);
                }
                td.appendChild(div);
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

const setSaveEvent = (year, month, day) => {
    let saveSchedule = document.getElementById("saveSchedule");
    saveSchedule.innerHTML = "";
    let saveScheduleBtn = document.createElement("button");
    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("saveScheduleBtnDiv");
    saveScheduleBtn.textContent = "登録";
    saveScheduleBtn.classList.add("saveScheduleBtn");
    saveScheduleBtn.addEventListener("click", (e) => {
        let startHour = document.getElementById("startHour").value;
        let startMin = document.getElementById("startMin").value;
        let endHour = document.getElementById("endHour").value;
        let endMin = document.getElementById("endMin").value;
        let text = document.getElementById("scheduleText").value;
        let index = Number(localStorage.getItem(`${year}_${month}_${day}_index`));
        if (!text) {
            alert('内容が入力されていません。');
        } else {
            localStorage.setItem(`${year}_${month}_${day}_startHour_${index + 1}`, startHour);
            localStorage.setItem(`${year}_${month}_${day}_startMin_${index + 1}`, startMin);
            localStorage.setItem(`${year}_${month}_${day}_endHour_${index + 1}`, endHour);
            localStorage.setItem(`${year}_${month}_${day}_endMin_${index + 1}`, endMin);
            localStorage.setItem(`${year}_${month}_${day}_memo_${index + 1}`, text);
            localStorage.setItem(`${year}_${month}_${day}_index`, index + 1);
            document.getElementById("scheduleText").value = "";
            createDisplayArea(year, month, day);
        }
    });
    buttonDiv.appendChild(saveScheduleBtn);
    saveSchedule.appendChild(buttonDiv);
}

const createDisplayArea = (year, month, day) => {
    let index = Number(localStorage.getItem(`${year}_${month}_${day}_index`));
    let displayArea = document.getElementById("displayArea");
    displayArea.innerHTML = "";
    for (let d = 1; d <= index; d++) {
        let p = document.createElement("p");
        let button = document.createElement("button");
        button.textContent = "✗";
        button.classList.add("deleteBtn");
        let span = document.createElement("span");
        let spanMemo = document.createElement("span");
        let memo = localStorage.getItem(`${year}_${month}_${day}_memo_${d}`);
        let startHour = localStorage.getItem(`${year}_${month}_${day}_startHour_${d}`);
        let startMin = localStorage.getItem(`${year}_${month}_${day}_startMin_${d}`);
        let endHour = localStorage.getItem(`${year}_${month}_${day}_endHour_${d}`);
        let endMin = localStorage.getItem(`${year}_${month}_${day}_endMin_${d}`);
        span.textContent = `${startHour}:${startMin}~${endHour}:${endMin}`;
        spanMemo.textContent = memo;
        spanMemo.classList.add("modal-memo-row");
        span.classList.add("modal-row");
        button.classList.add("modal-row");
        span.classList.add("modal-row-text");
        spanMemo.classList.add("modal-row-text");

        button.addEventListener("click", (e) => {
            localStorage.removeItem(`${year}_${month}_${day}_startHour_${d}`);
            localStorage.removeItem(`${year}_${month}_${day}_startMin_${d}`);
            localStorage.removeItem(`${year}_${month}_${day}_endHour_${d}`);
            localStorage.removeItem(`${year}_${month}_${day}_endMin_${d}`);
            localStorage.removeItem(`${year}_${month}_${day}_memo_${d}`);
            // for文でindexの訂正が必要
            for (let i = d; i < index; i++) {
                localStorage.setItem(`${year}_${month}_${day}_startHour_${i}`, localStorage.getItem(`${year}_${month}_${day}_startHour_${i + 1}`));
                localStorage.setItem(`${year}_${month}_${day}_startMin_${i}`, localStorage.getItem(`${year}_${month}_${day}_startMin_${i + 1}`));
                localStorage.setItem(`${year}_${month}_${day}_endHour_${i}`, localStorage.getItem(`${year}_${month}_${day}_endHour_${i + 1}`));
                localStorage.setItem(`${year}_${month}_${day}_endMin_${i}`, localStorage.getItem(`${year}_${month}_${day}_endMin_${i + 1}`));
                localStorage.setItem(`${year}_${month}_${day}_memo_${i}`, localStorage.getItem(`${year}_${month}_${day}_memo_${i + 1}`));
            }
            localStorage.removeItem(`${year}_${month}_${day}_startHour_${index}`);
            localStorage.removeItem(`${year}_${month}_${day}_startMin_${index}`);
            localStorage.removeItem(`${year}_${month}_${day}_endHour_${index}`);
            localStorage.removeItem(`${year}_${month}_${day}_endMin_${index}`);
            localStorage.removeItem(`${year}_${month}_${day}_memo_${index}`);
            localStorage.setItem(`${year}_${month}_${day}_index`, index - 1);
            createDisplayArea(year, month, day);
        });
        p.appendChild(button);
        p.appendChild(span);
        p.appendChild(spanMemo);
        displayArea.appendChild(p);
    }
}

const initDisplayArea = (year, month, day) => {
    let index = localStorage.getItem(`${year}_${month}_${day}_index`);
    if (!index) {
        localStorage.setItem(`${year}_${month}_${day}_index`, 0);
    }
}