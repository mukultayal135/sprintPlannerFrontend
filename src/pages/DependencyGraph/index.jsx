import React from "react";
import Graph from "react-vis-network-graph";
import Header from "../../components/Header";
/* import './NetworkChart.css' */
const output2 = {
  sprints: [
    [
      {
        id: 4,
        dependencies: [],
        storyPoints: 6,
        assignedDeveloperId: 0,
        startDay: 0,
        endDay: 6,
        remainingDuration: 0,
        developers: [{ id: 0, name: 'harbir' }],
      },
      {
        id: 5,
        dependencies: [],
        storyPoints: 5,
        assignedDeveloperId: 1,
        startDay: 0,
        endDay: 5,
        remainingDuration: 0,
        developers: [{ id: 1, name: 'mukul' }],
      },
      {
        id: 2,
        dependencies: [5],
        storyPoints: 4,
        assignedDeveloperId: 1,
        startDay: 5,
        endDay: 9,
        remainingDuration: 0,
        developers: [{ id: 1, name: 'mukul' }],
      },
      {
        id: 0,
        dependencies: [4, 5],
        storyPoints: 5,
        assignedDeveloperId: 0,
        startDay: 6,
        endDay: 11,
        remainingDuration: 0,
        developers: [{ id: 0, name: 'harbir' }],
      },
      {
        id: 3,
        dependencies: [2],
        storyPoints: 2,
        assignedDeveloperId: 1,
        startDay: 9,
        endDay: 11,
        remainingDuration: 0,
        developers: [{ id: 1, name: 'mukul' }],
      },
    ],
    [
      {
        id: 0,
        dependencies: [4, 5],
        storyPoints: 5,
        assignedDeveloperId: 0,
        startDay: 6,
        endDay: 11,
        remainingDuration: 0,
        developers: [{ id: 0, name: 'harbir' }],
      },
      {
        id: 3,
        dependencies: [2],
        storyPoints: 2,
        assignedDeveloperId: 1,
        startDay: 9,
        endDay: 11,
        remainingDuration: 0,
        developers: [{ id: 1, name: 'mukul' }],
      },
      {
        id: 1,
        dependencies: [3, 4],
        storyPoints: 3,
        assignedDeveloperId: 0,
        startDay: 11,
        endDay: 13,
        remainingDuration: -1,
        developers: [
          { id: 0, name: 'harbir' },
          { id: 1, name: 'mukul' },
        ],
      },
    ],
  ],
};
export default function DependencyGraph() {
  const allNodes = output2.sprints.reduce((acc, sprint) => {
      return [...acc, ...sprint.map(data => {
        const lab = String(data.id)
        return {id: data.id, label: lab, title:''}
      })]
  }, [])
  const uniqueNodes = [];
  const visitedNodes = [];
  allNodes.forEach((node)=>{
    if(!visitedNodes.includes(node.id)){
      uniqueNodes.push(node);
      visitedNodes.push(node.id);
    }
  })
  const graph = {
    nodes : uniqueNodes,
    edges : output2.sprints.reduce((acc, sprint) => {
      return [...acc, ...sprint.reduce((acc, data) => {
        if(data.dependencies.length){
          const test = data.dependencies.reduce((acc, element) => {
            return [...acc, ({from: data.id, to: element})]
          }, [])
            return [...acc, ...test]
        }
        return acc;
      }, [])]
  }, [])
  }
  const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "red"
    },
    height: "500px"
  };
  const events = {
    select: function (event) {
      var { nodes, edges } = event;
      console.log(edges);
      console.log(nodes);
    }
  };
  return (
    <div className="network-graph">
        <Header/>
      <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={(network) => {
      }}
    />
    </div>
  );
}





