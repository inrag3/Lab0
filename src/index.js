function integrate(a, b, E, func) {
    let n = 6;
    let previousSum = -1;
    let sum = 0;
   
    while (Math.abs(previousSum - sum) > E && n <= 200){
        previousSum = sum;
        sum = 0;
        let delta = (b - a) / n;
        for (let i = 0; i < n; i++){
            sum += func(delta*i+a) * delta;
        }
        n *= 2;
    }

    console.log(sum);
}

function func(x) {
    return x*Math.cos(x);
}

let a = parseInt(prompt("Введите левый конец интегрирования"));
let b = parseInt(prompt("Введите правый конец интегрирования"));

if (a >= b) {
    alert("Левая граница отрезка больше чем правая");
    location.reload();
}
else {
    let E = parseFloat(prompt("Введите точность:"));
    integrate(a,b, E, func);
}

