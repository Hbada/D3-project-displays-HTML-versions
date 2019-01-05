// TODO add to my webst samples on Stack Overflow, maybe Angel, and definitely busn and personal wordpress sites
// TODO deploy the finished remake of udemy course project to a page on business site and my own profile site; add screenshots to portfolio homepage

var htmlVersion = [
  // according to w3schools.com
  {
    version: "HTML 1",
    highlight: "The original 18 tags",
    year: 1991,
    awesomeness: "1"
  }, {
    version: "HTML 2.0",
    highlight: "Tables and other element types added",
    year: 1995,
    awesomeness: "1"
  }, {
    version: "HTML 3.2",
    highlight: "Changed display of math formulas and more",
    year: 1997,
    awesomeness: "2"
  }, {
    version: "HTML 4.01",
    highlight: "Improved on browser-specific elements and added ability to apply style sheets",
    year: 1999,
    awesomeness: "2"
  }, {
    version: "HTML5",
    highlight: "Added media tags, emphasized semantic structure while CSS handles style, and became 'living standard' to be continually updated",
    year: 2014,
    awesomeness: "3"
  }
];

// create variable to hold awesomeness rating
var colours = {
  "1": "beige",
  "2": "pink",
  "3": "magenta"
};

// grab the list with id=html_version_list to work with data above, using D3
d3.select("#versions")
    .style("list-style", "none")
    .style("padding-left", "0")
  .selectAll("li")

  // grab data in variable named htmlVersion
  .data(htmlVersion)
  .enter()

  // add <li> elements for each version
  .append("li")
    .text(function(d) {
      // formatted version + highlight quote + year
      // want to convert to arrow functions but not sure how to force ES6 to work here
      return d.version + ' - ' + d.highlight + ' (' + d.year + ')';
    })

    // add style to the list items
    .style("margin", "20px")
    .style("padding", "20px")
    .style("background-color", function(d) {
      return colours[d.awesomeness];
    })
    .style("border-radius", "8px")

    // font size larger for shorter strings
    .style("font-size", function(d) {
      return d.highlight.length < 45 ? "1.5em" : "1em";
    });

// style the elements in the entire page
d3.select(".title")
    .style("text-align", "center");
d3.selectAll("p, #versions")
    .style("margin", "20px 10%");
d3.selectAll("body")
    .style("font-family", "Arial");
