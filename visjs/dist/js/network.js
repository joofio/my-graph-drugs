var network;


const options = {
    "physics": {
        "barnesHut": {
            "springConstant": 0.1,
            "avoidOverlap": 0.8
        }
    },
    "layout": { "improvedLayout": true }
}
var filternodes = [];

let params = new URLSearchParams(location.search);

let substanceFilterValue = "";
let pharmFormFilterValue = "";
let routeFilterValue = "";
let LevelFilterValue = "";
let nodeFilterValue = "";

if (params.get("substance") != undefined) {
    nodeFilterValue = params.get("substance");

}



const substanceFilterSelector = document.getElementById("substanceFilterSelect");
const pharmFormFilterSelector = document.getElementById("PharmFormFilterSelect");
const RouteFilterSelector = document.getElementById("RouteFilterSelect");
const LevelFilterSelector = document.getElementById("LevelFilterSelect");

var nodesDataset = new vis.DataSet(nodes);
var edgesDataset = new vis.DataSet(edges);

// get a JSON object

//allNodes = nodesDataset.get({ returnType: "Object" });
//allEdges = edgesDataset.get({ returnType: "Object" })

/*
// Now using `then`
function getNodes(){
    return $.getJSON('data/nodes.json', function (node) {
        nodesDataset.add(node);
    });
  };
getNodes().done(function(data){

    console.log("node created")
});

$.getJSON('data/edges.json', function (edge) {
    edgesDataset.add(edge);
});


console.log(nodesDataset)
console.log(allNodes);
//problem with being assynchronous
*/

function populate_level_select() { //change for more convenience
    LevelFilterSelector.innerText = null; //remove
    var uniqueArray = ["All Levels"];

    Object.entries(nodes).forEach(function (item) {
        if (!(uniqueArray.includes(item[1].productType))) {
            uniqueArray.push(item[1].productType)
        }
    });
    uniqueArray.forEach(function (item) {
        var newOption = document.createElement("option");
        newOption.text = item.toString();//item.whateverProperty
        newOption.value = item.toString();//item.whateverProperty

        if (item === "All Levels") {
            newOption.value = ""

        }
        LevelFilterSelector.add(newOption);
        //new select items should populated immediately
    });
};

function populate_route_select() { //change for more convenience
    RouteFilterSelector.innerText = null; //remove
    var uniqueArray = ["All Routes"];

    Object.entries(nodes).forEach(function (item) {
        if ((item[1].hasOwnProperty('route')) & (!(uniqueArray.includes(item[1].route)))) {
            uniqueArray.push(item[1].route)
        }
    });
    uniqueArray.forEach(function (item) {
        var newOption = document.createElement("option");
        newOption.text = item.toString();//item.whateverProperty
        newOption.value = item.toString();//item.whateverProperty

        if (item === "All Routes") {
            newOption.value = ""

        }
        RouteFilterSelector.add(newOption);
        //new select items should populated immediately
    });
};

function populate_pharmForm_select() { //change for more convenience
    //console.log(nodeArray)
    pharmFormFilterSelector.innerText = null; //remove
    var uniqueArray = ["All Forms"];


    Object.entries(nodes).forEach(function (item) {
        if ((item[1].hasOwnProperty('doseForm')) & (!(uniqueArray.includes(item[1].doseForm)))) {
            uniqueArray.push(item[1].doseForm)
        }
    });
    uniqueArray.forEach(function (item) {
        var newOption = document.createElement("option");
        newOption.text = item.toString();//item.whateverProperty
        newOption.value = item.toString();//item.whateverProperty

        if (item.toString() === "All Forms") {

            newOption.value = ""
        }
        pharmFormFilterSelector.add(newOption);
        //new select items should populated immediately
    });
};

function populate_substance_select() { //change for more convenience
        LevelFilterSelector.innerText = null; //remove
     //   var uniqueArray = [{"value":"","text":"View Default"}];
    
        Object.entries(nodes).forEach(function (item) {
            if (item[1].productType==="Substance") {
                uniqueArray.push({"value":item[1].id,"text":item[1].name})
            }
        });
        uniqueArray.forEach(function (item) {
            var newOption = document.createElement("option");
            newOption.text = item["text"].toString();//item.whateverProperty
            newOption.value = item["value"].toString();//item.whateverProperty
    
            substanceFilterSelector.add(newOption);
            //new select items should populated immediately
        });
    };

function get_all_nodes_from_root(rootNode, degrees) {
    var level2Nodes = [];
    var level3Nodes = [];
    var level4Nodes = [];

    for (edge in edges) {
        if (edges[edge].to === rootNode) {
            if (!level2Nodes.includes(edges[edge].from)) {
                level2Nodes.push(edges[edge].from)
            }
        }
    }
    for (edge in edges) {
        if (level2Nodes.includes(edges[edge].to)) {
            if (!level3Nodes.includes(edges[edge].from)) {
                level3Nodes.push(edges[edge].from)
            }
        }
    }
    for (edge in edges) {
        if (level3Nodes.includes(edges[edge].to)) {
            if (!level4Nodes.includes(edges[edge].from)) {
                level4Nodes.push(edges[edge].from)
            }
        }
    }
    if (degrees === 4) {
        return level2Nodes.concat(level3Nodes, level4Nodes);
    }
    if (degrees === 3) {
        return level2Nodes.concat(level3Nodes);
    }
    if (degrees === 2) {
        return level2Node
    }
};
populate_level_select();
populate_pharmForm_select();
populate_route_select();
populate_substance_select();
function startNetwork(data) {

    // get a JSON object
   // const allEdges = edgesDataset.get({ returnType: "Object" });
   // allNodes = nodesDataset.get({ returnType: "Object" });

    const container = document.getElementById("mynetwork");
    network = new vis.Network(container, data, options);
}


function get_connected_nodes(node, selectedNode, substance) {
    var check_node = selectedNode === "" ? substance : selectedNode
    if (node.id == check_node) {
        return true;
    }

    for (edge in edges) {
        if ((edges[edge].from === node.id && edges[edge].to === check_node) || (edges[edge].from === check_node && edges[edge].to === node.id)) {
            return true;
        }
    }
    return false;
}

const nodesFilter = (node) => {
    /**
     * Main function for filtering
     * has the attributes defined and if the attributes are not "" and the objects have them and 
     * are contained inside the current filter - return true
     * everything else - return false
     * 
     * 
     * **/
    //  console.log(nodeFilterValue)

    var doesnt_check = true
    if (substanceFilterValue === "" && pharmFormFilterValue === "" && routeFilterValue === "" && LevelFilterValue === "" && nodeFilterValue === "") {//default
        // return node.productType === "substance";//default
        doesnt_check = get_connected_nodes(node, nodeFilterValue, "MedicationKnowledge/28")

    }
    if (nodeFilterValue != "" || substanceFilterValue != "") { //clicked or substance selected
        //for clicking
        doesnt_check = get_connected_nodes(node, nodeFilterValue, substanceFilterValue)
    }

    if (pharmFormFilterValue != "" && node.doseForm != pharmFormFilterValue) {
        doesnt_check = false;
    }

    if (routeFilterValue != "" && node.route != routeFilterValue) {
        doesnt_check = false;
    }

    if (LevelFilterValue != "" && node.productType != LevelFilterValue) {
        doesnt_check = false
    }

    return doesnt_check
};



substanceFilterSelector.addEventListener("change", (e) => {
    // set new value to filter variable
    substanceFilterValue = e.target.value;
    pharmFormFilterValue = "";
    routeFilterValue = "";
    LevelFilterValue = "";
    nodeFilterValue = "";
    // filternodes = get_all_nodes_from_root(substanceFilterValue, 3)

    /*
    refresh DataView,
    so that its filter function is re-calculated with the new variable
  */
    nodesView.refresh();

});

pharmFormFilterSelector.addEventListener("change", (e) => {
    pharmFormFilterValue = e.target.value;
    //filternodes = nodesView.getIds();
    nodesView.refresh();
});

LevelFilterSelector.addEventListener("change", (e) => {
    //  filternodes = nodesView.getIds();
    // nodeFilterValue = "";
    LevelFilterValue = e.target.value;
    nodesView.refresh();
});


RouteFilterSelector.addEventListener("change", (e) => {
    // filternodes = nodesView.getIds();
    routeFilterValue = e.target.value;
    nodesView.refresh();
});
const nodesView = new vis.DataView(nodesDataset, { filter: nodesFilter });
const edgesView = new vis.DataView(edgesDataset);

startNetwork({ nodes: nodesView, edges: edgesView });

function updateviewnetwork(params) {
    nodeFilterValue = params["nodes"][0]//the clicked node
    if (nodeFilterValue == undefined) { //reset with click outside
        nodeFilterValue = ""
        substanceFilterValue = "";
        pharmFormFilterValue = "";
        routeFilterValue = "";
        LevelFilterValue = "";
    }
    populate_level_select();
    populate_pharmForm_select();
    populate_route_select();
    nodesView.refresh();
}


network.on("click", updateviewnetwork);
