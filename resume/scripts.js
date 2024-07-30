document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('timeline');

    const jobs = [
        {
            title: 'Job Title 1',
            company: 'Company Name 1',
            period: 'Year - Year',
            description: 'Job description 1'
        },
        {
            title: 'Job Title 2',
            company: 'Company Name 2',
            period: 'Year - Year',
            description: 'Job description 2'
        }
    ];

    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job');
        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.period}</p>
        `;
        jobElement.addEventListener('click', () => {
            alert(job.description);
        });
        timeline.appendChild(jobElement);
    });
});
