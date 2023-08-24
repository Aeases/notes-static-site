### Definition
>[!cite] First Order Linear Recurrance Relation
>Defines a relationship between two *Successive* terms of a sequence. Using [[Simultaneous Equations]].

#### Formula of a First order linear recurrence relation
$$T_{n+1}=rT_n+d$$
And a beginning constant value: $T_1=a$, this constant value could also be any term in the sequence.

#### Types of First Order Linear Recurrence Relations
- [[Arithmetic Sequences|Arithmetic Relation]] - $T_{n+1}=T_n+d$
- [[Geometric Sequence]] - $T_{n+1}=rT_n$

#### Variants of First Order Linear Recurrence Relations
- [[Steady-State Sequences]]

## Working out First Order Linear Backwards
If the equation is working out for something with $T_{n+1}$ or $T_{n-1}$, then solve for $T_n$ inside of the equation.

**$T_{n+1}=2T_n+5$**
**$T_4=99$**
<hr>
 #### *$T_4$ --> $T_3$*
$$
\begin{aligned}
T_4=T_{3+1}=2T_3+5=99 \\
2T_3=94 \\
T_3=47
\end{aligned}
$$

<hr>
##### *$T_3$ --> $T_2$*

$$
\begin{aligned}
T_3=T_{2+1}=2T_2+5=47 \\
2T_2=42 \\
T_2=21
\end{aligned}
$$
<hr>
##### $T_2$ --> $T_1$

$$
\begin{aligned}
T_2=T_{1+1}=2T_1+5=21 \\
2T_1=16 \\
T_1=8
\end{aligned}
$$


> [!faq] Working out T_1 from summed terms
> We know that: $T_1+T_2=18$
> $$
> \begin{aligned}
> T_{n+1}=3T_n + 2 \\
> T_2 = 3T_1+2 \\
> T_1 = x \\
> x = 3x+2 = 18 \\
> \end{aligned}
> $$
> *We can then sovle for **x**
> $$
> \begin{aligned}
> x+(3x+2) = 18 \\
> 4x+2 = 18 \\
> 4x = 16 \\
> x = 4
> \end{aligned}
> $$
> 



>[!exq]- Example
>
*Given the Sequence:* -3, 5, 9, 11,...
Find First Order Linear Recurrence Relation
$$T_{n+1}=bT_n+c$$
Therefore, $T_{1+1}$ Referred to as $T_2$ 
*$T_2=b \times -3 + c = 5$*
*$T_3=b \times 5 + c = 9$*
Which can be re-written as:
*$-3b+c=5$*
*$5b+c=9$*
This is a [[Simultaneous Equations|Simultaneous Equation]], therefore we can use [[Simultaneous Equations#Elimination|the Elimination Method]] to find the value of the variables
$( 5b+c=9 ) - ( -3b+c=5 )$
$(5b - -3b = 8b)+(c-c=0)=(9-5=4)$
$8b=4$
We can then rearrange
$4 \div 8 = b$
$=0.5$
**b = 0.5**
>
To **Find C** we can *substituite it back into one of the original formulas*
$-3b+c=5$
$-3 \times 0.5 + c = 5$
And Re-arrange that
$c=5- -3 \times 0.5$
$c=6.5$
>Now we know *c=6.5* and *b=0.5*
>Now given the master Equation:
>
$$T_{n+1}=BT_n+c$$
>
>**We can substituite in our found values**
>$$T_{n+1}=0.5T_n+6.5$$
>With a constant value of $T_1=-3$