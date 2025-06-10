document.addEventListener('DOMContentLoaded', () => {

    const monthYear = document.querySelector('.month-year');
    const daysContainer = document.getElementById('days');

    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December'];

    const currentDate = new Date();
    const today = new Date();

    function renderCalendar(date) {
        const month = date.getMonth();
        const year = date.getFullYear();

        const firstDayIndex = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        const prevLastDate = new Date(year, month, 0).getDate();

        monthYear.textContent = `${months[month]} ${year}`;
        daysContainer.innerHTML = '';

        // Previous month days
        for (let i = firstDayIndex; i > 0; i--) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = prevLastDate - i + 1;
            dayDiv.classList.add('fade');
            daysContainer.appendChild(dayDiv);
        }

        // Current month days
        for (let i = 1; i <= lastDate; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            if (i === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear()) {
                dayDiv.classList.add("today");
            }
            daysContainer.appendChild(dayDiv);
        }

        // Next month days
        const lastDayIndex = new Date(year, month + 1, 0).getDay();
        const nextDays = 6 - lastDayIndex;

        for (let i = 1; i <= nextDays; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            dayDiv.classList.add('fade');
            daysContainer.appendChild(dayDiv);
        }
    }

    prev.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    next.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
