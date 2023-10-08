function init() 
{d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/
         14-Interactive-Web-Visualizations/02-Homework/samples.json")}

 var sample_values=data.samples.map(x=>x.sample_values);
 var otu_ids=data.samples.map(x=>x.otu_ids);
 var otu_labels=data.samples.map(x=>x.otu_labels);

 var sorted_values=sample_values.sort(function(a,b){return b-a});
 var topten_values=sorted_values.map(x=>x.slice(0,10));
 var sorted_ids=otu_ids.sort(function(a,b){return b-a});
 var topten_ids=sorted_ids.map(x=>x.slice(0,10));
 var sorted_labels=otu_labels.sort(function(a,b){return b-a});
 var topten_labels=sorted_labels.map(x=>x.slice(0,10));

 var trace1={x: topten_values[0],
             y:topten_ids[0].map(x=>"OTU"+x),
             text:topten_labels[0],
             type:"bar",
             orientation:"h",
             transforms:[{type:"sort",target:"y",order:"descending"}];
 var layout={title:'<b>Top 10 OTU</b>'}
 var data=[trace1]
 Plotly.newPlot("bar",data,layout)

 var trace2={x:otu_ids[0],
             y:sample_values[0],
             text:otu_labels[0],
             mode:"markers",
             marker:{color:otu_ids[0],
                     size:sample_values[0]}};
 var layout={title:'<b>Bubble Chart</b>"};

var data2 = [trace2]
 Plotly.newPlot("bubble",data2,layout);

 var id1=data.metadata[0]
 var sampleMetadata1=d3.select("#sample-metadata#).selectAll("h1");
                 
