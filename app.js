function check(){
    var score = 0
    var q1_ans1 =document.getElementById("q1-a1");
    var q1_ans2 =document.getElementById("q1-a2");
    var q1_ans3 =document.getElementById("q1-a3");
    var right_answer_1 = document.getElementById("q1-a4");
    if (right_answer_1.checked == true) {
        score++
        alert('Q1...Right Answer')
    }
    else{
        alert('Q1...Wrong Answer')
    }


    var q2_ans1 =document.getElementById("q2-a1");
    var right_answer_2 = document.getElementById("q2-a2");
    var q2_ans3 =document.getElementById("q2-a3");
    var q2_ans4 =document.getElementById("q2-a4");
    if (right_answer_2.checked == true) {
        score++
        alert('Q2...Right Answer')
    }
    else{
        alert('Q2...Wrong Answer')
    }


    
    var right_answer_3 = document.getElementById("q3-a1");
    var q3_ans1 =document.getElementById("q3-a2");
    var q3_ans3 =document.getElementById("q3-a3");
    var q3_ans4 =document.getElementById("q3-a4");
    if (right_answer_3.checked == true) {
        score++
        alert('Q3...Right Answer')
    }
    else{
        alert('Q3...Wrong Answer')
    }



    var q4_ans1 =document.getElementById("q4-a1");
    var right_answer_4 = document.getElementById("q4-a2");
    var q4_ans3 =document.getElementById("q4-a3");
    var q4_ans4 =document.getElementById("q4-a4");
    if (right_answer_4.checked == true) {
        score++
        alert('Q4...Right Answer')
    }
    else{
        alert('Q4...Wrong Answer')
    }



    var q5_ans1 =document.getElementById("q5-a1");
    var q5_ans5 =document.getElementById("q5-a3");
    var right_answer_5 = document.getElementById("q5-a3");
    var q5_ans4 =document.getElementById("q5-a4");
    if (right_answer_5.checked == true) {
        score++
        alert('Q5...Right Answer')
    }
    else{
        alert('Q5...Wrong Answer')
    }

    alert('You score ' + score++ + ' points')
}