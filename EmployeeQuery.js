window.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.text-error');
    name.addEventListener('input',function() {
        if (name.value.length == 0) {
            nameError.textContent = '';
            return;
        }try {
            (new EmployeePayrollData()).name = name.value;
            nameError.textContent = '';
        }catch (e) {
            nameError.textContent = e;
        }
    });
    const startDate = document.querySelector('#start-date');
    const dateError = document.querySelector('.date-error');
    startDate.addEventListener('input', function() {
      try {
        (new EmployeePayrollData()).startDate = new Date(startDate.value);
        dateError.textContent = '';
      } catch (e) {
        dateError.textContent = e;
      }
    });
})