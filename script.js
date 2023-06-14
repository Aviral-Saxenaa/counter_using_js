// console.log("hi");
(function func() {
        const buttons = document.querySelectorAll(".butn");
        let count = 0;
        buttons.forEach(function (ele) {
                ele.addEventListener("click", function () {
                        if (ele.classList.contains("prevbtn")) {
                                count--;
                        }
                        else if (ele.classList.contains("nextbtn")) {
                                count++;
                        }
                        var output = document.querySelector(".counter");
                        output.innerHTML = count;

                        if (count > 0) {
                                output.classList.add("greenbtn");
                        }
                        else if (count < 0) {
                                output.classList.add("redbtn");
                        }
                })
        })
})();