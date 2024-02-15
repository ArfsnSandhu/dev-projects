let count_a = 0
let count_b = 0

let value_a = document.getElementById("score-count-a")
let value_b = document.getElementById("score-count-b")
let winner_a = document.getElementById("winner-a")
let winner_b = document.getElementById("winner-b")

function plus_one_a() {
    count_a = count_a + 1
    value_a.innerHTML = count_a
    if (count_a > count_b) {
        winner_a.innerHTML = "Leading Team"
        winner_b.innerHTML = ""
    } else if (count_b > count_a){
        winner_b.innerHTML = "Leading Team"
        winner_a.innerHTML = ""
    }
}

function plus_two_a() {
    count_a = count_a + 2
    value_a.innerHTML = count_a
    if (count_a > count_b) {
        winner_a.innerHTML = "Leading Team"
        winner_b.innerHTML = ""
    } else if (count_b > count_a){
        winner_b.innerHTML = "Leading Team"
        winner_a.innerHTML = ""
    }
}

function plus_three_a() {
    count_a = count_a + 3
    value_a.innerHTML = count_a
    if (count_a > count_b) {
        winner_a.innerHTML = "Leading Team"
        winner_b.innerHTML = ""
    } else if (count_b > count_a){
        winner_b.innerHTML = "Leading Team"
        winner_a.innerHTML = ""
    }
}

function plus_one_b() {
    count_b = count_b + 1
    value_b.innerHTML = count_b
    if (count_a > count_b) {
        winner_a.innerHTML = "Leading Team"
        winner_b.innerHTML = ""
    } else if (count_b > count_a){
        winner_b.innerHTML = "Leading Team"
        winner_a.innerHTML = ""
    }
}

function plus_two_b() {
    count_b = count_b + 2
    value_b.innerHTML = count_b
    if (count_a > count_b) {
        winner_a.innerHTML = "Leading Team"
        winner_b.innerHTML = ""
    } else if (count_b > count_a){
        winner_b.innerHTML = "Leading Team"
        winner_a.innerHTML = ""
    }
}

function plus_three_b() {
    count_b = count_b + 3
    value_b.innerHTML = count_b
    if (count_a > count_b) {
        winner_a.innerHTML = "Leading Team"
        winner_b.innerHTML = ""
    } else if (count_b > count_a){
        winner_b.innerHTML = "Leading Team"
        winner_a.innerHTML = ""
    }
}

function reset_value() {
    count_a = 0
    count_b = 0
    value_a.innerHTML = count_a
    value_b.innerHTML = count_b
    winner_a.innerHTML = ""
    winner_b.innerHTML = ""
}

