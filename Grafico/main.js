const ctx = document.getElementById('myChart').getContext("2d")

const gradient = ctx.createLinearGradient(0,0,0, 400)
gradient.addColorStop(0, 'yellow')
gradient.addColorStop(1, 'green')

const labels = [

    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022'
]

const data = {
    labels,
    datasets: [{
        data:[211, 231,236,278,289,423,437,489],
        label: "Progressão de vendas",
        fill:true,
        backgroundColor: gradient
    }]
}

const config = {
    type: "line",
    data :data,
    options: {
        responsive: true,
        radius:4,
        hoverRadius:10,
        scales:{
            y:{
                ticks: {
                    callback: function(value){
                        let finalValue = value.toFixed(2) 
                        return 'R$ ' + finalValue.replace ('.',',') + 'Mi'
                    }
                }
            }


        }
    }

};

const myChart = new Chart(ctx,config);