var btnopen=document.getElementById('btnmodal')
var btnclose=document.getElementById('btnclose')
var modal=document.getElementById('modal')
var graph=document.getElementById('graph')

btnopen.onclick = function() {
    modal.style.display = "block";
};

btnclose.onclick = function() {
    modal.style.display = "none";
};

console.log("Hi");

// Plotly



var trace1 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    type: 'bar',
    name: 'Serie1',
    text: [20, 14, 23],
    textposition: 'auto', 
    textfont: {
        color: 'white'
    },
    marker:{
        color:'violet',
        line:{
            color:'black',
            width:2
        }
    }
    }

    var trace2 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [10, 15, 13],
        mode: 'lines+markers+text',
        type: 'scatter',
        name: 'Mi gráfico de dispersión',
        text: [10, 15, 13],
        textposition: 'top', 
        textfont: {
            color: 'blue'
        },
        marker: {
        color: 'rgb(0,0,255)'
        },
        line: {
            dash: 'dot',
            width: 4
        }
    };

    var layout = {
        plot_bgcolor: 'rgb(200,200,200)',
        paper_bgcolor: 'rgb(270,270,200)',
        autosize: true, // Esto permite especificar el tamaño
        // height: 500,     // Aquí está la altura del gráfico
        // width: 600,      // Aquí está el ancho del gráfico
        margin: {
          l: 30,   // Margen izquierdo
          r: 30,   // Margen derecho
          b: 150,  // Margen inferior
          t: 150,  // Margen superior
          pad: 1  // Espacio alrededor del gráfico
        },
        hoverlabel: {
            bgcolor: 'rgb(255,255,255)'
        },
        legend: {
            bgcolor: 'rgb(255,200,200)',
            x: 0.5,
            y: -0.3,
            xanchor: 'center',
            yanchor: 'top'
          },
          title: {
            text: 'Mi Título', // Aquí está el título
            font: {
              size: 24
            }
          },
          annotations: [
            {
              text: 'Mi Subtítulo', // Aquí está el subtítulo
              showarrow: false,
              xref: 'paper',
              yref: 'paper',
              x: 0,
              y: 1.2,
              font: {
                size: 16
              }
            },
            {
              text: 'Mi Referencia', // Aquí está la referencia
              showarrow: false,
              xref: 'paper',
              yref: 'paper',
              x: 0,
              y: -.7,
              font: {
                size: 12
              }
            }
          ]
    };   
    
var data = [trace1, trace2];

Plotly.newPlot('gplot1', data,layout);
Plotly.newPlot('gplot2', data,layout);
Plotly.newPlot('gplot3', data,layout);
Plotly.newPlot('gplot4', data,layout);
// window.onresize = function() {
//     Plotly.Plots.resize('gplot1');
//     Plotly.Plots.resize('gplot2');
//     Plotly.Plots.resize('gplot3');
//     Plotly.Plots.resize('gplot4');
// };

