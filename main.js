
setTimeout(() => {
    let bar = document.querySelectorAll('.bar');

    bar.forEach((progress) => {

        let value = progress.getAttribute('data-value');
        progress.style.width = `${value}%`;
        let count = 0;

        let progressAnimation = setInterval(() => {

            if (count >= value) {
                clearInterval(progressAnimation);
            }
            else {
                count++;
                progress.innerHTML = `${count}%`;
            }
        }, 15);
    });

}, 1000);

// window.onload = function(){
//     let bar = document.querySelectorAll('.bar');
//     bar.forEach((progress)=>{
//         let value = progress.getAttribute('data-value');
//         progress.style.width = `${value}%`;

//         let count = 0;

//         let progressAnimation = setInterval(()=>{
//             count++;
//             progress.innerHTML = `${count}%`;

//             if(count >= value){
//                 clearInterval(progressAnimation);
//             }
//         },12);

//     })
// }

