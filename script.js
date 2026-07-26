const deptSelect = document.getElementById('Department');
const subjectSelect = document.getElementById('Subject');
const subjectInput = document.getElementById('SubjectInput');

deptSelect.addEventListener('change', function () {
        const isIT = this.value === 'Information Technology';

        subjectSelect.hidden = !isIT;
        subjectInput.hidden = isIT;
        subjectSelect.required = isIT;
        subjectInput.required = !isIT;
    });

