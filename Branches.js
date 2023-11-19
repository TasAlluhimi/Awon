
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
        case "5":
            iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915745.3599437821!2d51.41017913818358!3d26.289875231028937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e917e3355ebd%3A0xa1ead439c0f2ff03!2z2LTYsdmD2Kkg2KfZhNin2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitipICjYudmI2YYp!5e0!3m2!1sar!2ssa!4v1700358101685!5m2!1sar!2ssa"
            break;  
        case "6":
           iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229224.22971048596!2d43.81112208049424!3d26.143650365445588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1582237795c8452b%3A0xb5509a35d32fea79!2z2LTYsdmD2Kkg2KfZhNin2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitipINi52YjZhiDYp9mE2KjZg9mK2LHZitip!5e0!3m2!1sar!2seg!4v1700355909769!5m2!1sar!2seg"  
           break;
        case "7":
            iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1843222.7326799287!2d46.67194338067939!3d25.536897915546973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f5802a6fb74c9%3A0xaa50cee9e15e1db6!2z2LTYsdmD2Kkg2KfZhNin2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitip!5e0!3m2!1sar!2seg!4v1700356157240!5m2!1sar!2seg" 
            break;
        case "8":
            iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142742.9388983253!2d42.90609202195604!3d16.9978282859282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1607f543e227107b%3A0x1e72eaf100fe0eba!2z2LTYsdmD2Kkg2KfZhNil2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitipICgg2LnZiNmGICk!5e0!3m2!1sar!2seg!4v1700356283934!5m2!1sar!2seg"
            break;
        case "9":
            iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.621983719973!2d42.04843472469405!3d18.54597696839753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e485640d6c9063%3A0xda357ba2d7132648!2z2LTYsdmD2Kkg2KfZhNin2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitipINi52YjZhiDZhdit2KfZitmEINi52LPZitix!5e0!3m2!1sar!2seg!4v1700356547887!5m2!1sar!2seg"
            break;
        case "10":
            iframe.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15218.23111932502!2d44.201546!3d17.528611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fec3a9a86f9a8b%3A0x46a75914686a32ac!2z2LTYsdmD2Kkg2KfZhNin2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitmHINmB2LHYuSDZhtis2LHYp9mG!5e0!3m2!1sar!2seg!4v1700356632114!5m2!1sar!2seg"
            break;
        case "11":
            iframe.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d236.80766757568406!2d42.6357904!3d18.2593657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb560593d4ebe1%3A0xa2a18fd5a9b6f9fa!2z2LTYsdmD2Kkg2KfZhNin2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitipINi52LPZitix!5e0!3m2!1sar!2ssa!4v1700356726025!5m2!1sar!2ssa"
            break;
        case "12":
            iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24884.782406353035!2d41.507649508697504!3d20.0083876582438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ef4528b4de323f%3A0xde6a97d8d1f8f756!2z2LTYsdmD2Kkg2LnZiNmGINin2YTYqNin2K3YqQ!5e0!3m2!1sar!2ssa!4v1700357003316!5m2!1sar!2ssa"
            break;
        case "13":
            iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56620.77947362817!2d41.758185625076294!3d27.506634670594526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157647b0608a8911%3A0x248ec0b5b3976e04!2z2LTYsdmD2Kkg2KfZhNil2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitipIC0g2K3Yp9im2YQgKCDYudmA2YDZgNmA2YDZgNmA2YDZgNmA2YDZgNmA2YDZgNmA2YDZgNmI2YYgKQ!5e0!3m2!1sar!2ssa!4v1700357670241!5m2!1sar!2ssa"
            break;
        case "14":
            iframe.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14036.872820157594!2d36.570815!3d28.412672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15a9ad42cdd2af45%3A0x7a7fd0775293a8ca!2z2LTYsdmD2Kkg2KfZhNin2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitipINi52YjZhg!5e0!3m2!1sar!2seg!4v1700357235750!5m2!1sar!2seg"
            break;
        case "15":
            iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114405.14337530763!2d44.01699319300105!3d26.35366284239687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f5802a6fb74c9%3A0xaa50cee9e15e1db6!2z2LTYsdmD2Kkg2KfZhNin2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitip!5e0!3m2!1sar!2ssa!4v1700357324840!5m2!1sar!2ssa"
            break;
        case "16":
            iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58099.26735011342!2d39.73210930824281!3d24.478380344594296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd957a6aeb578f%3A0xa7028bf73f5d38f7!2z2LTYsdmD2Kkg2KfZhNin2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitipICjYudmI2YYp!5e0!3m2!1sar!2seg!4v1700357520424!5m2!1sar!2seg"
            break;
         case "17":
            iframe.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7285.132928784345!2d38.053936!3d24.081567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15b9060ef77256eb%3A0x6c50af86bf1259c2!2z2LTYsdmD2Kkg2KfZhNin2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitip!5e0!3m2!1sar!2seg!4v1700357176624!5m2!1sar!2seg" 
            break;
        case "18":
            iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118825.62611302792!2d39.87364575170506!3d21.456710299432668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b12f5cafc15%3A0xef9d5267a779bd10!2z2LnZiNmGINmE2YTYudmF2KfZhNipINin2YTZhdmG2LLZhNmK2Kk!5e0!3m2!1sar!2ssa!4v1700357802818!5m2!1sar!2ssa"
            break;
        case "19":
            iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114405.14337530763!2d44.01699319300105!3d26.35366284239687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f5802a6fb74c9%3A0xaa50cee9e15e1db6!2z2LTYsdmD2Kkg2KfZhNin2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitip!5e0!3m2!1sar!2ssa!4v1700357324840!5m2!1sar!2ssa"
            break;

        default:
            iframe.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7435.824742283186!2d40.393552!3d21.274936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e98fe6b127ba03%3A0xc93e00b27889a799!2z2LTYsdmD2Ycg2KfZhNin2LPYqtmC2K_Yp9mFINin2YTYr9mI2YTZitipINi52YjZhiDYp9mE2LfYp9im2YE!5e0!3m2!1sar!2ssa!4v1700355589041!5m2!1sar!2ssa" 
    }
        });




