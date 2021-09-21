var width = parseFloat(d3.select('#scatter').style('width'))
var height = .66*width;
var svg = d3.select('#scatter')
            .append('svg')
            .style('border','2px solid black')
            .style('width',width)
            .style('height',height)

var xText = svg.append('g').attr('transform',`translate(${width/2},${.97*height})`);

xText
    .append('text')
    .attr('class','x aText active')
    .text('Household Income(Medium)')
    .attr('dataLink','income')

xText
    .append('text')
    .attr('class','x aText inactive')
    .text('Age (Medium)')
    .attr('dataLink','age')
    .attr('y',-20)

xText
    .append('text')
    .attr('class','x aText inactive')
    .text('In Poverty (%)')
    .attr('dataLink','poverty')
    .attr('y',-40)


var yText = svg.append('g').attr('transform',`translate(${.07*width},${.5*height})rotate(-90)`);

    yText
        .append('text')
        .attr('class','y aText inactive')
        .text('Lacks Healthcare(%)')
        .attr('dataLink','healthcare')
    
    yText
        .append('text')
        .attr('class','y aText inactive')
        .text('Smokes(%)')
        .attr('dataLink','smokes')
        .attr('y',-20)
    
    yText
        .append('text')
        .attr('class','y aText active')
        .text('Obese (%)')
        .attr('dataLink','obesity')
        .attr('y',-40)

d3.selectAll('.aText').on('click',function () {
    var selection = d3.select(this)
    if (selection.classed('x')) {
        d3.selectAll('.x').classed('active',false).classed('inactive',true);
    } else {
        d3.selectAll('.y').classed('active',false).classed('inactive',true);
    };
    selection.classed('active',true).classed('inactive',false)

});

