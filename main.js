const cardReference = document.getElementsByClassName('image-card');
const imageRowsReferences = document.getElementsByClassName('image-row');


for (let i = 0; i < cardReference.length-1; i++) {
    cardReference.item(i).addEventListener('mouseenter', () => {
        if(cardReference.item(i).classList.contains('row-1')){
            imageRowsReferences.item(0).classList.add('paused');
        }

        else {
            imageRowsReferences.item(1).classList.add('paused');
        }
    })

    cardReference.item(i).addEventListener('mouseleave', () => {
        if(cardReference.item(i).classList.contains('row-1')){
            imageRowsReferences.item(0).classList.remove('paused');
        }

        else {
            imageRowsReferences.item(1).classList.remove('paused');
        }
    })
}


// FAQ Section Buttons

const buttonsReference = document.getElementsByClassName('faq-btn');


for (let i = 0; i < buttonsReference.length; i++) {
    buttonsReference.item(i).addEventListener('click', () => {
        if(buttonsReference.item(i).classList.contains('active')){
            buttonsReference.item(i).classList.remove('active');
            console.log(buttonsReference.length);
        }

        else {
            for(let j = 0; j < buttonsReference.length; j++){
                buttonsReference.item(j).classList.remove('active');
            }
            buttonsReference.item(i).classList.add('active');
        }
    })
}