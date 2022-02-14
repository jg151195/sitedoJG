const url = 'https://www.breakingbadapi.com/api/death';
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    const seasons = [];
    data.forEach(element => {
        seasons.push(element.season);
    });
    const s1 = seasons.filter(x=>x === 1).length;
    const s2 = seasons.filter(x=>x === 2).length;
    const s3 = seasons.filter(x=>x === 3).length;
    const s4 = seasons.filter(x=>x === 4).length;
    const s5 = seasons.filter(x=>x === 5).length;

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Season 1','Season 2','Season 3','Season 4','Season 5'],
            datasets: [{
                label: 'DEATHS',
                data: [s1,s2,s3,s4,s5],
                backgroundColor: [
                    'rgba(0, 0, 0, 0.5)',
                    'rgba(242, 38, 19,1)',
                    'rgba(104, 195, 163,1)',
                    'rgba(204,204,0,1)',
                    'rgba(140, 20, 252,1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}
getData();