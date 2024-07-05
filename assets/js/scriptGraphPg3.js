const width = 450,
    height = 450,
    margin = 30;

// Calcola il raggio del grafico a torta
const radius = Math.min(width, height) / 2 - margin;

const data = [pippo, pippa];
const pie = d3.pie();
const arcs = pie(data)

console.log(arcs);

const svg = d3.select(".graph-container")
    .append("svg")
    // .attr("width", width)
    // .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`)
    ;

const color = d3.scaleOrdinal()
    .domain(data)
    .range(["#01FFFF", "#C2128D"]);

const arc = d3.arc()
    .innerRadius(radius * 0.7)
    .outerRadius(radius);


svg.selectAll('path')
    .data(arcs)
    .join('path')
    .attr('d', arc)
    .attr('fill', d => color(d.data));


const textGroup = svg.append("g")
    .attr("class", "center-text-group");

const textHeigth = parseInt(pippo) > parseInt(pippa) ? -10 : 10;


textGroup.append("text")
    .text((pippo) > (pippa) ? "Congratulations!" : "Test failed!")
    .attr("class", "graph-center-text bold-font")
    .attr("x", 0)
    .attr("y", textHeigth - 40)
    .style("fill", "white");

textGroup.append("text")
    .text((pippo) > (pippa) ? "You passed the exam" : "U're a coglione")
    .attr("class", "graph-center-text bold-font")
    .attr("x", 0)
    .attr("y", textHeigth - 15)
    .style("fill", "#01ffff");


if (parseInt(pippo) > parseInt(pippa)) {

    textGroup.append("text")
        .text(`We'll send you certificate in few `)
        .attr("class", "graph-center-text final-results-description extra-thin-font")
        .attr("x", 0)
        .attr("y", textHeigth + 10)
        .style("fill", "white");

    textGroup.append("text")
        .text(`minutes. Check your email `)
        .attr("class", "graph-center-text final-results-description extra-thin-font")
        .attr("x", 0)
        .attr("y", textHeigth + 30)
        .style("fill", "white");

    textGroup.append("text")
        .text(`(including promotion`)
        .attr("class", "graph-center-text final-results-description extra-thin-font")
        .attr("x", 0)
        .attr("y", textHeigth + 50)
        .style("fill", "white");

        textGroup.append("text")
        .text(`/ spam folder) `)
        .attr("class", "graph-center-text final-results-description extra-thin-font")
        .attr("x", 0)
        .attr("y", textHeigth + 70)
        .style("fill", "white");

}
else {

    textGroup.append("text")
        .text(`We'll send u a coglione's`)
        .attr("class", "graph-center-text final-results-description extra-thin-font")
        .attr("x", 0)
        .attr("y", textHeigth + 10)
        .style("fill", "white");

    textGroup.append("text")
        .text(`certificate ASAP `)
        .attr("class", "graph-center-text final-results-description extra-thin-font")
        .attr("x", 0)
        .attr("y", textHeigth + 30)
        .style("fill", "white");
}
// we'll send u a coglione's certificate asap


