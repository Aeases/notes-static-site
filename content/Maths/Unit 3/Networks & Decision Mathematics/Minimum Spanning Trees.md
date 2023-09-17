---
edited_seconds: 10
updated_at: 2023-09-14T11:58:00.701+08:00
---
>[!cite] Minimum Spanning Tree
>A Minimum Spanning Tree is essentially the same as a [[Spanning Trees|Spanning Tree / Subtree]], except that it refers to a **subtree** of a [[Weighted graph]].

### Practical Uses of a Minimum Spanning Tree
- A network of pipelines to connect a number of locations in the water, gas, and oil industries
- A network of wiring on eelectrical equipment and appliances
- A transportation network, that is ral, road etc.
- Tele-communication networks such as telephones lines, computer networks, cable televesion etc.
Using a Minimum Spanning Tree can **maximise cost-effectiveness**


### Systematic Appraoch to creating a Minimum Spanning Tree
##### Prims Algorithm
Step 1: Choose any vertex within the network
Step 2: Find the edge with the lowest value connecting this vertex to another vertex
Step 3: Look at all edges conencting these two verticies and dchoose the edge that has the lowest value.
Step 4: Loo kat all the verticies covered so far and select the edge with the lowest value
Step 5: Repeat step 4 until all the vreticies in the graph are included in the tree

Note that if there is more than one edge with the lwest value, then just choose either.

###### Prims Algorithm
Start at a specific vertex, look at what out of any of the available options of edges to connect, the edge you choose must have the smallest number, **and** will add a new vertex to the graph. while adhering to being a tree.

you then add up all the weights on the edges, you can **prove** that you added all of them together by counting the number of verticies in your Spanning Tree and subtract 1, if you added that amount of numbers together before, then you added the correct amount of trees.

##### Prims Algorithm on a table
1. Activate a random column, this is the **starting node**.
2. Cross out the *row* of the **starting node**, this removes it's *perspective* from the data later on.
3. search from the **starting node**'s *column*, find the lowest value, whatever *row* this value belongs to is the "next node" you will be searching for the lowest value from.
4. "**activate**" the column with the same *letter* as the *value* from before, this is the **node** you are now searching from.
5. Repeat the previous steps, make sure once you find a new lowest value to travel to, cross out your old nodes **row** to remove its 