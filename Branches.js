
// changing map based on user seletion 

let dropdown = document.getElementById("cityDropdown");
let iframe = document.getElementById("googleMap");


dropdown.addEventListener("change", function() {
    let selectedCity = dropdown.value;
    switch (selectedCity) {
        case "1":
            iframe.src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d165885.49880198552!2d46.801812823610014!3d24.72912940426751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2K7Yr9mF2Kkg2LnZiNmGIA!5e0!3m2!1sar!2ssa!4v1698423493767!5m2!1sar!2ssa"
            break;
        case "2":
            iframe.src = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3640.389095687087!2d47.324305599999995!3d24.158083299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDA5JzI5LjEiTiA0N8KwMTknMjcuNSJF!5e0!3m2!1sar!2ssa!4v1700344013394!5m2!1sar!2ssa"
            break;
        case "3":
            iframe.src = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3509.7833429342495!2d45.9664722!3d28.395611100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDIzJzQ0LjIiTiA0NcKwNTcnNTkuMyJF!5e0!3m2!1sar!2ssa!4v1700345090040!5m2!1sar!2ssa"
            break;
        case "4":
            iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20387.539565124767!2d49.55813130276945!3d25.40340903989903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e37974106d0e25b%3A0x406d257de9931cc7!2z2LTYsdmD2Kkg2KfZhNin2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitipINi52YjZhg!5e0!3m2!1sar!2ssa!4v1700345636977!5m2!1sar!2ssa"
            break;
        default:
            iframe.src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d165885.49880198552!2d46.801812823610014!3d24.72912940426751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2K7Yr9mF2Kkg2LnZiNmGIA!5e0!3m2!1sar!2ssa!4v1698423493767!5m2!1sar!2ssa"                
            break;
    }
        });
