---
dg-publish: true
updated_at: 2023-09-08T13:47:15.103+08:00
---

### Definition
>[!cite] Hamiltonian Graph
>A Hamiltonian Graph is a graph that  contains a **hamiltonian path**, 
>(Hamiltonian path is the same as a path that goes to every single [[Vertex]] once.)
>
>Similar to a [[Eulerian graph]] except you go to every vertex instead of every edge, following the rules of a [[Path]] instead of a [[Trail]]
>
>**Semi-hamiltonian** graph - A Open *Hamiltonian* [[Path]]
>**Hamiltonian** graph - A Closed *Hamiltonian* [[Path]]

>[!note] Distinguish Eulerian and Hamiltionian
>Eulerian - Cares about getting to every edge.
>Hamiltonian - Cares about getting to every vertex.

#### Hamiltonian Cycle
A  [[Cycle]] where you go through every single vertex. (Closed *path*)

#### Hamiltonian Path
A [[Path]] where you never repeat Edges or verticies. (Open *path*)

##### Properties
- All [[Complete graph]]s are *hamiltonian*
- Complete [[Bipartite Graphs]] with the **same number** of verticies in each group are *hamiltonian*.
- All Dis-[[Connected Graph]]s are **not hamiltonian**.

>[!warning]
>Make sure to justify what you found to get follow-through marks

>[!note]
>A path is