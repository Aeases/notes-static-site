---
banner: "![[2ZhlMEr.png]]"
dg-publish: true
banner_y: 0.5
---

### Definition
>[!cite] Eulerian Graph
>A Eulerian graph is a graph which contains a [[Eulerian Circuit]].
>A Semi-Eulerian graph contains a [[Semi-Eulerian Trail]].
> 
><hr>
>
>A **Eulerian Circuit** exists if the *graph* has 0 [[Vertex#Odd Vertex|Odd Vertices]]. (Closed Trail) 
>A **Semi-Eulerian Trail** exists if the *graph* has 2 [[Vertex#Odd Vertex|Odd Verticies]]. (Open Trail)
>*Eulerian* and *semi-eulerian* Graphs are **[[Traversable Graphs|Traversable]]**. meaning we can traverse them using each edge only once. you can **revisit verticies** but not ***edges***.

>[!note] Distinguish Eulerian and Hamiltionian
>Eulerian - Cares about getting to every edge
>Hamiltonian - Cares about getting to every vertex.

- Eulerian Graphs
	- Are Traversable
	- Are Closed [[Trail]]s (Start and end at the same vertex)
- Semi-Eulerian Graphs
	- Are Traversable
	- Are Open [[Trail]]s (Start and end at different verticies)

To find the start and end points of a **Semi-Eulerian Graph** you count the degree of each vertex, and  start and end at the odd verticies.


>[!warning]
>Mr. Acott will mark wrong if don't say that a graph is eulerian **because** it contains a [[Eulerian Trail]].

#check - In a **non-eulerian** graph you end at the other odd vertex

>[!note]
>A Trail is a walk where you do not repreat edges but do repeat verticies, therefore, a Euerlian Trail is a trail where you go to every single edge once, withotu repeating verticies.



