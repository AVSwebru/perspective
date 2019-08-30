export default function classSetter(tag, classes) {
   
    const elements =  document.querySelectorAll(tag);

    if (elements) {
        elements.forEach((element) => {
            for (let i = 0; i < classes.length; i++) {
                element.classList.add(classes[i]);
            }
        });
    }

}