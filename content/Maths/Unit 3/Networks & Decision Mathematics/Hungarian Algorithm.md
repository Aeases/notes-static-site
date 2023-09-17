---
updated_at: 2023-09-14T14:06:10.313+08:00
edited_seconds: 710
---
55
>[!cite] 
>Hngarian is the **Systematic Method** for working out [[Allocation]].
>
>Minimum Allocation: [[#Basic Hungarian Algorithm]]
>Maximum Allocation: [[#Alocating for a maximum]]
>>[!abstract]- Purpose of the Hungarian Algorith
>>To determine the minimum allocation of rows to columns.
>>
>>Where rows could be people, and columns could be tasks for example



>[!syllabus]
>![[Syllabus - Math Unit 4#^4-3-11]]
 
## Basic Hungarian Algorithm

![[Hungarian Algorithm 2023-09-11 10.01.11.excalidraw|100%]]
#### Steps 
1. Row Reduction
	- Find the Lowest Value in a column
	- Take the value of the smallest number in the row, subtract it from every number in that row.

2. Column Reduction

3. **if** the numberof lines is ***not equal*** to the number of columns/rows
	- Find the smallest uncovered number
	- Take the value of the smallest covered number;
		- Add the number to the intersection numbers
		- Remove the value of the number to the uncovered numbers.
	- 

4. Construct a [[Bipartite Graphs|Bipartite Graph]] 
	- Use [[Allocation]] of a Bipartite graph to find the vallues associated with the specific value in the original matrix.


## Variations of Hungarian Algorithm

### Number of People ≠ Number of Tasks
![[Pasted image 20230913113232.png]]

We add a dummy row / dummy column such that the number of columns and rows is the same.





### Alocating for a maximum
- Find the **largest** number in the table
- Take the value of the largest number, and replace every element $x$ from the largest number $m$. so it would look klike $x-m$ where x is the element you are currently replacing

![[Pasted image 20230913113114.png]]
Then continue as usual with the Hungarian Algorithm, e.g. row reduction, then column etc etc.

>There can be questions where it's a maximum & the number of people doesnt equal the number of tasks


>Zeros go in first then you maximise by swaping out the numbers for x and taking largest number m 