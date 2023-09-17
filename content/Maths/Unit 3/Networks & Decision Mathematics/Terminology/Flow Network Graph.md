
A Graph that represents [[Flow]], we can use it to find the **maximum flow**.




#### Maximum Flow - Systematic Approach
![[Flow Network Graph 2023-08-28 09.42.13.excalidraw]]
- Start from the top most path. 
	- ABCEF
- Find the lowest capacity [[Edge]], write down it's value
	- e.g. A -> B = 4
- Take the value of the lowest capacity edge and **take it from all edges on that path**.
	- A -> B = 4
		- 4 - 4 = 0
	- B -> C = 6
		- 6 - 4 = 2
	- C -> E = 5
		- 5-4 = 1
	- E -> F = 15
		- 15-4 = 11


>[!example]- Examples of Systematic Approach
>
>![[Pasted image 20230828095948.png]]
>
><hr>
>
>![[Pasted image 20230828100030.png]]
#### Remaining Capacity
- Take the **remaining capacity** of the pipes as found in the first part of the question.
- Then take that from the **maximum flow** of that pipe.

e.g. A-C has a remaining capacity of 120, but max of 400
$400-120=280$


