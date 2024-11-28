
document.getElementById("activity").addEventListener("click", function() {
    let activity = document.getElementById("activity").value;

    activity ={
        "Sedentary": 1.2,
        "Lightly-Active": 1.375,
        "Moderately-Active": 1.550,
        "Very-Active": 1.725,
        "Extra-Active": 1.9
    };

    const level = this.value;
    const index = activity[level];
    values = index
});

// calculate TDEE and print it

function calculate(){

    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    
    BMI = weight/((height/100)**2);

    Men_BMR =  (10 * weight) + (6.25 * height) - (5 * age) + 5;
    Women_BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;

    Men_TDEE = Men_BMR * values;
    Women_TDEE = Women_BMR * values;
    
    if (gender == "Male"){
        document.getElementById("bmi").value = BMI.toFixed(1);
        document.getElementById("bmr").value = Math.ceil(Men_BMR);
        document.getElementById("tdee").value = Math.ceil(Men_TDEE);
    }else{
        document.getElementById("bmi").value = BMI.toFixed(1);
        document.getElementById("bmr").value = Math.ceil(Women_BMR);
        document.getElementById("tdee").value = Math.ceil(Women_TDEE);
    }
};

