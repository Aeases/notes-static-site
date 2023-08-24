---
dg-publish: true
---

### Definition
>[!cite]
>An Adjacency [[Matrices|Matrix]] shows how many **Edges** connect the two in question to eachother according to the matrix as shown bleow.

### Examples
$$
\begin{array}{c c} 
& \begin{array}{c c c} A & B & C & D \\ \end{array} \\
\begin{array}{c c c}A\\ B\\ C\\ D \end{array} &
\left[
\begin{array}{c c c}
1 & 2 & 1 & 0 \\
2 & 0 & 3 & 1 \\
1 & 3 & 0 & 1 \\
0 & 1 & 1 & 2
\end{array}
\right]
\end{array}
$$

### Adjacency Matrix Notation

$$A_{\text{Row Column} }$$

$A_{43}$ = Column 4 and Row 3 of a matrix.



>[!multi-column]
>
>>[!blank]
>>![](https://i.imgur.com/Pp4T3zR.png)
>
>>[!blank]
>>![](https://i.imgur.com/RyyuoN0.png)
#### Finding Adjacency Matrix within $x$ steps
Multiplying a matrix by the power of $x$  shows $x$ steps to get to a specific node.

$$
\begin{array}{c c} 
& 
\left[
\begin{array}{c c c}
1 & 2 & 1 & 0 \\
2 & 0 & 3 & 1 \\
1 & 3 & 0 & 1 \\
0 & 1 & 1 & 2
\end{array}
\right]
\end{array}
\times
\begin{array}{c c} 
& 
\left[
\begin{array}{c c c}
1 & 2 & 1 & 0 \\
2 & 0 & 3 & 1 \\
1 & 3 & 0 & 1 \\
0 & 1 & 1 & 2
\end{array}
\right]
\end{array} = \\
\begin{array}{c c} 
& \begin{array}{c c c} A & B & C & D \\ \end{array} \\
\begin{array}{c c c}A\\ B\\ C\\ D \end{array} &
\left[
\begin{array}{c c c}
6 & 5 & 7 & 3 \\
5 & 14 & 3 & 5 \\
7 & 33 & 11 & 5 \\
3 & 5 & 5 & 6
\end{array}
\right]
\end{array}

$$




$$
\begin{array}{} 6 & 6 & 6
\end{array}{}
\begin{pmatrix}
5 & 5 & 5 \\
5 & 5 & 5 \\
5 & 5 & 5
\end{pmatrix}
$$


There are X walks from D to C with a length of Y