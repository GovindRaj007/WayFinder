export function djikstra(grid,startNode,finishNode)
{
    const visitedNodesInOrder=[];
    // if(!startNode|| !finishNode ||startNode==finishNode) {
    //   return false;  
    // }
    startNode.distance=0;
    const unvisitedNodes=getAllNodes(grid);
    while(!!unvisitedNodes.length){
        sortnodesbydistance(unvisitedNodes);
        const closestNode=unvisitedNodes.shift();
        if(closestNode.isWall)
        continue;
        if(closestNode.distance===Infinity)
        return visitedNodesInOrder; 
        closestNode.isVisited=true;
        visitedNodesInOrder.push(closestNode);
        if(closestNode===finishNode)
        return visitedNodesInOrder;
        updateUnvisitedNeighbours(closestNode,grid);
    }
}
function sortnodesbydistance(unvisitedNodes)
{
    unvisitedNodes.sort((nodeA,nodeB)=>nodeA.distance-nodeB.distance);
}
function updateUnvisitedNeighbours(node,grid){
    const unvisitedNeighbours=getUnvisitedNeighbours(node,grid);
    for(const neighbour of unvisitedNeighbours){
        neighbour.distance=node.distance+1;
        neighbour.previousNode=node;
    }
}
function getUnvisitedNeighbours(node,grid){
    const neighbours=[];
    const {col,row}=node;
    if(row>0)
    neighbours.push(grid[row-1][col]);
    if(row<grid.length -1)
    neighbours.push(grid[row+1][col]);
    if(col>0)
    neighbours.push(grid[row][col-1]);
    if(col<grid[0].length-1)
    neighbours.push(grid[row][col+1]);
    return neighbours.filter(neighbour=>!neighbour.isVisited);
}
function getAllNodes(grid)
{
    const nodes=[];
    for(const row of grid){
        for(const node of row)
        nodes.push(node)
    }
    return nodes;
}
export function getNodesInShortestPathOrder(finishNode){
    const nodesInShortestPathOrder=[];
    let currentNode=finishNode;
    while(currentNode!==null)
    {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode=currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
}