export default function clearSubscribe(input, clearBtn) {
    clearBtn.hidden = true;
    input.addEventListener('input', () => {
        (input.value) ? showElement(clearBtn) : hideElement(clearBtn);
    });
    clearBtn.addEventListener('click', () => {
        input.value = '';
        hideElement(clearBtn);
    });

    const hideElement = (element) => element.hidden = true;
    const showElement = (element) => element.hidden = false;
}
