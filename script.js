function getTime() {
    const today = new Date();
    const hours = today.getHours();
    let minutes = today.getMinutes();

    const singleDigits = [];
    for (let i = 0; i <= 9; i++) {
        singleDigits.push(i);
    }

    if (singleDigits.includes(minutes)) {
        minutes = '0' + minutes;
    }

    return hours + ":" + minutes;
}

function calculator() {
    return {
        selectedNumber: '0',
        operation: '',
        result: '',
        appendNumber(number) {
            let checked = document.querySelector('.checked');
            if (checked) {
                this.result = eval(this.selectedNumber + this.operation + number);
                this.selectedNumber = number;
                checked.classList.remove('checked');
                return;
            }

            if (this.selectedNumber === '0') {
                this.selectedNumber = String(number);
            } else {
                this.selectedNumber += String(number);
            }
        },
        clear() {
            this.selectedNumber = 0;
        },
        changeSign() {
            this.selectedNumber = Number(this.selectedNumber * -1);
        },
        percentage() {
            this.selectedNumber = Number(this.selectedNumber / 100);
        },
        selectOperation(event, operation) {
            if (operation === '=') {
                if (this.result.length === 0) {
                    this.result = eval(this.selectedNumber + this.operation + this.selectedNumber);
                }

                this.selectedNumber = this.result;
                this.result = '';
                this.operation = '';
                let checked = document.querySelector('.checked');
                if (checked) {
                    checked.classList.remove('checked');
                }

                return;
            }


            if (this.result) {
                this.selectedNumber = this.result;
                this.result = '';
            }

            this.operation = operation;
            event.target.classList.add('checked');
        },
    }
}
