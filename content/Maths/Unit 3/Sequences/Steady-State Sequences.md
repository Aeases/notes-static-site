### Definition
>[!cite]
>Steady State sequences are [[First Order Linear Recurrence Relation]]s, that, in the long run, start to concentrate around a single number.

#### Standard Formula
$$T_{n+1}=rT_n+d$$
This is the same as [[Recursive Sequences|Recursive Sequence Formula]], it is steady state when r is between -1 and 1.

$T_1=4$

### Steady State Solution
The steady state solution is the value at which the Steady State Equation begins to stabilise near **but never at** a specific value. it is achieved whenever the r value of **any [[First Order Linear Recurrence Relation#Types of First Order Linear Recurrence Relations|First Order Linear Recurrence Relation]] is between -1 < r < 1.


>[!abstract]- Examples of Steady State Sequences
>$$T_{n+1}=0.8T_n+10$$
>$$U_{n+1}=ku_n+12$$
.$$t_{n+1}=0.4t_n+18$$
>$$x=0.8x+10$$ (x replacing $T_n$ and $T_{n+1}$)

#### Finding the Steady State of a Steady State Sequence

##### Example 1
$$
\begin{aligned}
T_{n+1}=T_n \times 0.72 + 28 \\
x=x \times 0.72 + 28 \\
x = 0.72x+28 \\
0.28x = 28 \\
100= x=\frac{28}{0.28}
\end{aligned}
$$
##### Example 2
$$
\begin{aligned}
T_{n+1}=T_n \times 0.25 + 150 \\
x = x \times 0.25 + 150 \\
x = 0.25x + 150 \\
0.75x = 150 \\
200 = x = \frac{150}{0.75}
\end{aligned}
$$